package com.salesdashboard.controller;

import com.salesdashboard.model.Sale;
import com.salesdashboard.service.DashboardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {
    private final DashboardService service;

    public DashboardController(DashboardService service) {
        this.service = service;
    }

    @GetMapping("/summary")
    public Map<String, Object> summary() { return service.summary(); }

    @GetMapping("/monthly")
    public List<Map<String, Object>> monthly() { return service.monthly(); }

    @GetMapping("/categories")
    public List<Map<String, Object>> categories() { return service.categories(); }

    @GetMapping("/regions")
    public List<Map<String, Object>> regions() { return service.regions(); }

    @GetMapping("/products")
    public List<Map<String, Object>> products() { return service.products(); }

    @GetMapping("/transactions")
    public List<Sale> transactions() { return service.sales(); }
}
