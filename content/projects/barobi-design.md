# Barobi Design — Full-Stack E-Commerce & Inventory Management Platform

## 📌 Project Overview

**Barobi Design** is an enterprise-grade, full-stack digital commerce and inventory management platform built to power a high-traffic live consumer storefront. Engineered to handle large catalog variations (over 500+ distinct SKUs) with concurrent cart checkouts, the system couples a blazing-fast server-rendered Next.js front-end with an optimized PostgreSQL transactional back-end deployed entirely on **Google Cloud Platform (GCP)**.

---

## 🔗 Key Links & Information

- **Live Storefront Website:** [barobidesign.com.bd](https://barobidesign.com.bd)
- **Author & Full-Stack Engineer:** Ahmed Awsaf
- **Client & Sponsor:** Barobi Design (Director: [Mr. Raeq Alam](mailto:raeq95@icloud.com))
- **Status:** Active Commercial Production Platform

---

## 🛠️ Technical Architecture & Infrastructure

- **Frontend Application:** Next.js (SSR / SSG), React, TypeScript, Tailwind CSS
- **Backend API Layer:** Express.js, Node.js RESTful API microservices
- **Database Engine:** PostgreSQL (Optimized indexes, concurrent locking, foreign key constraints)
- **Cloud Infrastructure:** Google Cloud Platform (GCP Cloud Run / App Engine, Cloud SQL, Cloud Storage for product imagery)
- **Payment & Third-Party Integrations:** Integrated secure local & international payment gateways, SMS notifications, and delivery courier API tracking

---

## ✨ Key Technical Accomplishments

1. **500+ SKU Catalog Handling:** Designed normalized relational schemas with composite indexing to deliver sub-100ms catalog search and category filtering across hundreds of product variants (sizes, materials, colors).
2. **Transactional Integrity & Concurrency:** Implemented ACID-compliant inventory reservation transactions to prevent overselling during flash promotions and peak checkout events.
3. **Automated Order Processing:** Real-time administrative portal enabling the warehouse and fulfillment staff to update order statuses, generate shipping invoices, and restock low-inventory items.
4. **Cloud-Native Scalability on GCP:** Leveraged GCP's elastic infrastructure and managed container runtimes to maintain zero downtime and low latency.
