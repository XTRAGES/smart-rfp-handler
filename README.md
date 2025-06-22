# 📄 Smart RFP Handler

## 📝 Description

This project automates the flow of receiving Request for Proposals (RFPs) and processing them through Azure services into a format that can be used by AI. It involves several Azure components working together to streamline the RFP process.

## ✨ Features

*   **AI-Driven Document Extraction:** Automatically extracts data from RFPs using Azure Cognitive Services.
*   **AI Summarizer & Intelligent Product Matching:** Uses GPT to summarize RFP data and match product specifications from a catalog.
*   **Automated Proposal Drafting:** Integrates ChatGPT API output with Microsoft Copilot for sending proposals.
*   **Economic Feasibility Analysis:** Automates the process of obtaining approval for a proposal based on its economic feasibility.

## 🚀 Installation

1.  **Set up Azure Blob Storage:** Create a Blob Storage account to store incoming RFP documents.
2.  **Configure Azure Logic Apps:** Create a Logic App that triggers whenever a new file is uploaded to the Blob Storage container.
3.  **Pre-process Documents Using Azure Cognitive Services:** Route documents for data extraction based on file type.
4.  **Prepare Data for GPT Processing:** Aggregate and format the extracted information for GPT.
5.  **Integrate with GPT for Final Processing:** Send the prepared data to GPT for summarization and product matching.

## 🛠️ Usage

### Task 1: AI-Driven Document Extraction

This task automates the extraction of data from RFPs using Azure Cognitive Services. It involves setting up Azure Blob Storage, configuring Azure Logic Apps, pre-processing documents, and integrating with GPT for final processing.

### Task 2: AI Summarizer & AI-Driven Document Extraction

This task uses GPT to summarize RFP data and match product specifications from a catalog. It involves sending data to GPT for processing and creating GPT prompts for AI summarization and intelligent product matching.

### Task 3: Automated Proposal Drafting

This task integrates ChatGPT API output with Microsoft Copilot for sending proposals. It involves data preparation, API integration, connecting ChatGPT with Microsoft Copilot, and refining and reviewing the proposal.

### Task 4: Economic Feasibility Analysis

This task automates the process of obtaining approval for a proposal based on its economic feasibility. It involves defining economic metrics, setting up proposal submission and initial review, integrating with business intelligence tools, and automating with Azure Logic Apps and Azure Functions.

## 🛡️ License

[LICENSE](LICENSE)

## 📧 Contact

aldinzendeli33@gmail.com
