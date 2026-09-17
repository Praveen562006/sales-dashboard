package com.salesdashboard.service;

import com.salesdashboard.model.Sale;
import com.salesdashboard.repository.SaleRepository;
import org.springframework.stereotype.Service;

import java.time.format.TextStyle;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class DashboardService {
    private final SaleRepository repository;

    public DashboardService(SaleRepository repository) {
        this.repository = repository;
    }

    public List<Sale> sales() {
        return repository.findAll();
    }

    public Map<String, Object> summary() {
        List<Sale> sales = sales();
        double revenue = sales.stream().mapToDouble(Sale::getAmount).sum();
        double profit = sales.stream().mapToDouble(Sale::getProfit).sum();
        long customers = sales.stream().map(Sale::getCustomerName).distinct().count();

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("revenue", revenue);
        result.put("orders", sales.size());
        result.put("customers", customers);
        result.put("profit", profit);
        result.put("growth", 12.8);
        return result;
    }

    public List<Map<String, Object>> monthly() {
        Map<String, double[]> grouped = new LinkedHashMap<>();
        sales().stream()
                .sorted(Comparator.comparing(Sale::getSaleDate))
                .forEach(s -> {
                    String key = s.getSaleDate().getMonth().getDisplayName(TextStyle.SHORT, Locale.ENGLISH);
                    grouped.computeIfAbsent(key, k -> new double[2]);
                    grouped.get(key)[0] += s.getAmount();
                    grouped.get(key)[1] += s.getProfit();
                });

        return grouped.entrySet().stream().map(e -> {
            Map<String, Object> m = new LinkedHashMap<>();
            m.put("month", e.getKey());
            m.put("revenue", e.getValue()[0]);
            m.put("profit", e.getValue()[1]);
            return m;
        }).collect(Collectors.toList());
    }

    public List<Map<String, Object>> categories() {
        return sales().stream().collect(Collectors.groupingBy(Sale::getCategory,
                LinkedHashMap::new, Collectors.summingDouble(Sale::getAmount)))
                .entrySet().stream().map(e -> {
                    Map<String, Object> m = new LinkedHashMap<>();
                    m.put("category", e.getKey());
                    m.put("sales", e.getValue());
                    return m;
                }).toList();
    }

    public List<Map<String, Object>> regions() {
        return sales().stream().collect(Collectors.groupingBy(Sale::getRegion,
                LinkedHashMap::new, Collectors.summingDouble(Sale::getAmount)))
                .entrySet().stream().map(e -> {
                    Map<String, Object> m = new LinkedHashMap<>();
                    m.put("region", e.getKey());
                    m.put("sales", e.getValue());
                    return m;
                }).toList();
    }

    public List<Map<String, Object>> products() {
        return sales().stream().collect(Collectors.groupingBy(Sale::getProductName,
                Collectors.summingDouble(Sale::getAmount)))
                .entrySet().stream()
                .sorted((a,b) -> Double.compare(b.getValue(), a.getValue()))
                .limit(8)
                .map(e -> {
                    Map<String, Object> m = new LinkedHashMap<>();
                    m.put("product", e.getKey());
                    m.put("sales", e.getValue());
                    return m;
                }).toList();
    }
}
