package com.salesdashboard.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "sales")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    private String productName;
    private String category;
    private String region;
    private double amount;
    private double profit;
    private String status;
    private LocalDate saleDate;

    public Sale() {}

    public Sale(String customerName, String productName, String category, String region,
                double amount, double profit, String status, LocalDate saleDate) {
        this.customerName = customerName;
        this.productName = productName;
        this.category = category;
        this.region = region;
        this.amount = amount;
        this.profit = profit;
        this.status = status;
        this.saleDate = saleDate;
    }

    public Long getId() { return id; }
    public String getCustomerName() { return customerName; }
    public String getProductName() { return productName; }
    public String getCategory() { return category; }
    public String getRegion() { return region; }
    public double getAmount() { return amount; }
    public double getProfit() { return profit; }
    public String getStatus() { return status; }
    public LocalDate getSaleDate() { return saleDate; }

    public void setId(Long id) { this.id = id; }
    public void setCustomerName(String v) { customerName = v; }
    public void setProductName(String v) { productName = v; }
    public void setCategory(String v) { category = v; }
    public void setRegion(String v) { region = v; }
    public void setAmount(double v) { amount = v; }
    public void setProfit(double v) { profit = v; }
    public void setStatus(String v) { status = v; }
    public void setSaleDate(LocalDate v) { saleDate = v; }
}
