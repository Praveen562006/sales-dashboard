const API = "http://localhost:8080/api/dashboard";

const demoSales = [
["Aarav Mehta","MacBook Pro","Technology","South",145000,29000,"Completed","2026-01-06"],
["Priya Sharma","Office Chair","Furniture","North",28000,8400,"Completed","2026-01-14"],
["Rahul Kumar","iPhone 16","Technology","West",82000,16400,"Completed","2026-02-03"],
["Ananya Iyer","Laser Printer","Office Supplies","South",36000,7200,"Completed","2026-02-18"],
["Vikram Singh","Monitor 4K","Technology","North",52000,10400,"Pending","2026-03-02"],
["Neha Patel","Standing Desk","Furniture","West",41000,12300,"Completed","2026-03-17"],
["Arjun Rao","Wireless Headset","Technology","East",18000,5400,"Completed","2026-04-08"],
["Meera Nair","Printer Paper Pack","Office Supplies","South",12000,3000,"Completed","2026-04-21"],
["Karan Shah","iPad Air","Technology","West",69000,13800,"Completed","2026-05-04"],
["Diya Menon","Ergonomic Chair","Furniture","East",33000,9900,"Pending","2026-05-19"],
["Rohan Das","Laptop Stand","Furniture","North",15000,4500,"Completed","2026-06-06"],
["Ishita Roy","Cloud Server Plan","Technology","South",95000,28500,"Completed","2026-06-22"],
["Aditya Jain","Mechanical Keyboard","Technology","East",21000,6300,"Completed","2026-07-09"],
["Sneha Gupta","Filing Cabinet","Furniture","North",24000,7200,"Completed","2026-07-25"],
["Nikhil Verma","Projector","Technology","West",58000,11600,"Completed","2026-08-10"],
["Pooja Reddy","Desk Organizer","Office Supplies","South",9000,2250,"Completed","2026-08-27"],
["Sanjay Kumar","Business Tablet","Technology","East",73000,14600,"Completed","2026-09-05"],
["Kavya Krishnan","Conference Table","Furniture","North",62000,18600,"Completed","2026-09-11"]
].map((x,i)=>({id:i+1,customerName:x[0],productName:x[1],category:x[2],region:x[3],amount:x[4],profit:x[5],status:x[6],saleDate:x[7]}));

let sales = [];
let revenueChart, categoryChart;

const money = n => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
const compact = n => n>=100000 ? "₹"+(n/100000).toFixed(1)+"L" : money(n);

async function load() {
  try {
    const r = await fetch(API+"/transactions",{signal:AbortSignal.timeout(1000)});
    if(!r.ok) throw Error();
    sales = await r.json();
  } catch(e) {
    sales = demoSales;
  }
  render();
}

function filtered() {
  const cat=document.getElementById("category").value;
  const days=document.getElementById("period").value;
  let data=[...sales];
  if(cat!=="all") data=data.filter(x=>x.category===cat);
  if(days!=="all") {
    const latest=new Date(Math.max(...data.map(x=>new Date(x.saleDate))));
    const cutoff=new Date(latest); cutoff.setDate(cutoff.getDate()-Number(days));
    data=data.filter(x=>new Date(x.saleDate)>=cutoff);
  }
  return data;
}

function render(){
  const data=filtered();
  const revenue=data.reduce((a,x)=>a+x.amount,0), profit=data.reduce((a,x)=>a+x.profit,0);
  document.getElementById("revenue").textContent=compact(revenue);
  document.getElementById("orders").textContent=data.length.toLocaleString("en-IN");
  document.getElementById("customers").textContent=new Set(data.map(x=>x.customerName)).size;
  document.getElementById("profit").textContent=compact(profit);
  document.getElementById("categoryTotal").textContent=compact(revenue);
  renderRevenue(data); renderCategories(data); renderProducts(data); renderRegions(data); renderTransactions(data);
}

function renderRevenue(data){
  const months={};
  data.forEach(x=>{
    const d=new Date(x.saleDate), k=d.toLocaleString("en",{month:"short"});
    if(!months[k]) months[k]={revenue:0,profit:0,order:d.getMonth()};
    months[k].revenue+=x.amount; months[k].profit+=x.profit;
  });
  const entries=Object.entries(months).sort((a,b)=>a[1].order-b[1].order);
  if(revenueChart) revenueChart.destroy();
  revenueChart=new Chart(document.getElementById("revenueChart"),{
    type:"line",
    data:{labels:entries.map(x=>x[0]),datasets:[
      {label:"Revenue",data:entries.map(x=>x[1].revenue),borderWidth:2,pointRadius:3,tension:.35},
      {label:"Profit",data:entries.map(x=>x[1].profit),borderWidth:2,pointRadius:2,tension:.35}
    ]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{grid:{color:"#eef0f4"},ticks:{font:{size:9},callback:v=>v>=100000?"₹"+v/100000+"L":"₹"+v/1000+"k"}},x:{grid:{display:false},ticks:{font:{size:9}}}}}
  });
}

function renderCategories(data){
  const groups={}; data.forEach(x=>groups[x.category]=(groups[x.category]||0)+x.amount);
  if(categoryChart) categoryChart.destroy();
  categoryChart=new Chart(document.getElementById("categoryChart"),{type:"doughnut",data:{labels:Object.keys(groups),datasets:[{data:Object.values(groups),borderWidth:0}]},options:{cutout:"76%",plugins:{legend:{display:false}}}});
  document.getElementById("categoryLegend").innerHTML=Object.entries(groups).map(([k,v])=>`<span><i></i>${k} ${Math.round(v/data.reduce((a,x)=>a+x.amount,0)*100)}%</span>`).join("");
}

function renderProducts(data){
  const g={}; data.forEach(x=>g[x.productName]=(g[x.productName]||0)+x.amount);
  const top=Object.entries(g).sort((a,b)=>b[1]-a[1]).slice(0,6), max=top[0]?.[1]||1;
  document.getElementById("productsList").innerHTML=top.map(([name,v])=>`<div class="product-row"><div><div class="product-info"><b>${name}</b><span>${money(v)}</span></div><div class="bar"><i style="width:${v/max*100}%"></i></div></div></div>`).join("");
}

function renderRegions(data){
  const g={}; data.forEach(x=>g[x.region]=(g[x.region]||0)+x.amount);
  const top=Object.entries(g).sort((a,b)=>b[1]-a[1]), max=top[0]?.[1]||1;
  document.getElementById("regionList").innerHTML=top.map(([name,v])=>`<div class="region-row"><div><div class="region-info"><b>${name}</b><span>${money(v)}</span></div><div class="bar"><i style="width:${v/max*100}%"></i></div></div></div>`).join("");
}

function renderTransactions(data){
  const q=document.getElementById("search").value.toLowerCase();
  const rows=data.filter(x=>[x.customerName,x.productName,x.category,x.region,x.status].some(v=>v.toLowerCase().includes(q))).slice().reverse().slice(0,10);
  document.getElementById("transactionsBody").innerHTML=rows.map(x=>`<tr><td><b>${x.customerName}</b></td><td>${x.productName}</td><td>${x.category}</td><td>${x.region}</td><td><b>${money(x.amount)}</b></td><td><span class="status ${x.status.toLowerCase()}">${x.status}</span></td><td>${new Date(x.saleDate).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</td></tr>`).join("");
}

document.getElementById("category").addEventListener("change",render);
document.getElementById("period").addEventListener("change",render);
document.getElementById("search").addEventListener("input",render);
document.getElementById("clearSearch").addEventListener("click",()=>{document.getElementById("search").value="";render()});
document.getElementById("exportBtn").addEventListener("click",()=>{
  const rows=filtered(), csv=["Customer,Product,Category,Region,Amount,Profit,Status,Date",...rows.map(x=>[x.customerName,x.productName,x.category,x.region,x.amount,x.profit,x.status,x.saleDate].map(v=>`"${String(v).replaceAll('"','""')}"`).join(","))].join("\n");
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download="sales-report.csv";a.click();
});
load();
