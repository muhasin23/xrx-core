"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2202],{4069:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/xrx-core/docs/introduction","docId":"introduction","unlisted":false},{"type":"link","label":"Quick Start","href":"/xrx-core/docs/quickstart","docId":"quickstart","unlisted":false},{"type":"link","label":"Demos","href":"/xrx-core/docs/demos/","docId":"demos/index","unlisted":false},{"type":"category","label":"How it works","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"System Architecture","href":"/xrx-core/docs/how-it-works/system_architecture","docId":"how-it-works/system_architecture","unlisted":false},{"type":"link","label":"API Design","href":"/xrx-core/docs/how-it-works/api_design","docId":"how-it-works/api_design","unlisted":false},{"type":"link","label":"Guardrails","href":"/xrx-core/docs/how-it-works/guardrails","docId":"how-it-works/guardrails","unlisted":false},{"type":"link","label":"Graph Agents: Shopify app","href":"/xrx-core/docs/how-it-works/graph_agents_shopify_app","docId":"how-it-works/graph_agents_shopify_app","unlisted":false}],"href":"/xrx-core/docs/category/how-it-works"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Run the Shopify Application","href":"/xrx-core/docs/tutorials/run_shopify_applications","docId":"tutorials/run_shopify_applications","unlisted":false},{"type":"link","label":"Run the Patient Intake Application","href":"/xrx-core/docs/tutorials/run_patient_intake_application","docId":"tutorials/run_patient_intake_application","unlisted":false},{"type":"link","label":"Build Your Own Reasoning Application","href":"/xrx-core/docs/tutorials/bring_your_own_reasoning_agent","docId":"tutorials/bring_your_own_reasoning_agent","unlisted":false},{"type":"link","label":"Enabling LLM Guardrails","href":"/xrx-core/docs/tutorials/enabling_llm_guardrails","docId":"tutorials/enabling_llm_guardrails","unlisted":false},{"type":"link","label":"Enabling LLM Observability","href":"/xrx-core/docs/tutorials/setting_up_llm_observability","docId":"tutorials/setting_up_llm_observability","unlisted":false},{"type":"link","label":"Changing STT providers","href":"/xrx-core/docs/tutorials/changing_stt_providers","docId":"tutorials/changing_stt_providers","unlisted":false},{"type":"link","label":"Changing TTS providers","href":"/xrx-core/docs/tutorials/changing_tts_providers","docId":"tutorials/changing_tts_providers","unlisted":false},{"type":"link","label":"Creating your own Widgets","href":"/xrx-core/docs/tutorials/create_your_own_widgets","docId":"tutorials/create_your_own_widgets","unlisted":false},{"type":"link","label":"Using the UI Debug Mode","href":"/xrx-core/docs/tutorials/using_the_ui_debug_mode","docId":"tutorials/using_the_ui_debug_mode","unlisted":false}],"href":"/xrx-core/docs/tutorials/"},{"type":"category","label":"API References","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Orchestrator","href":"/xrx-core/docs/references/orchestrator","docId":"references/orchestrator","unlisted":false},{"type":"link","label":"Speech-To-Text (STT)","href":"/xrx-core/docs/references/stt","docId":"references/stt","unlisted":false},{"type":"link","label":"Text-To-Speech (TTS)","href":"/xrx-core/docs/references/tts","docId":"references/tts","unlisted":false},{"type":"link","label":"Reasoning Agent","href":"/xrx-core/docs/references/agent","docId":"references/agent","unlisted":false},{"type":"link","label":"Guardrails","href":"/xrx-core/docs/references/guardrails","docId":"references/guardrails","unlisted":false}],"href":"/xrx-core/docs/references/"},{"type":"link","label":"Contributing to xRx","href":"/xrx-core/docs/contributing","docId":"contributing","unlisted":false}]},"docs":{"contributing":{"id":"contributing","title":"Contributing to xRx","description":"First off, thank you for considering contributing to xRx! It\'s people like you that make this project great.","sidebar":"tutorialSidebar"},"demos/index":{"id":"demos/index","title":"xRx Demos","description":"","sidebar":"tutorialSidebar"},"how-it-works/api_design":{"id":"how-it-works/api_design","title":"API Design","description":"Overview","sidebar":"tutorialSidebar"},"how-it-works/graph_agents_shopify_app":{"id":"how-it-works/graph_agents_shopify_app","title":"Graph Agents: Shopify app","description":"The significantly more advanced reasoning application in the xRx system is an agent that interacts with a Shopify store with dummy data. The agent is in charge of helping a customer go through a simple online order workflow. Basic concepts like carts, products, and orders are used through Shopify to facilitate this interaction.","sidebar":"tutorialSidebar"},"how-it-works/guardrails":{"id":"how-it-works/guardrails","title":"Guardrails","description":"The Guardrails system is a flexible and powerful API proxy that enhances security and content moderation for your applications. It leverages the Guardrails AI Hub to apply various checks and filters to incoming and outgoing data.","sidebar":"tutorialSidebar"},"how-it-works/system_architecture":{"id":"how-it-works/system_architecture","title":"System Architecture","description":"Modular Components","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Welcome to the xRx documentation! This documentation is designed to help you understand and use the xRx system.","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"Quick Start","description":"Introduction","sidebar":"tutorialSidebar"},"references/agent":{"id":"references/agent","title":"Reasoning Agent","description":"FastAPI Version: 0.1.0","sidebar":"tutorialSidebar"},"references/guardrails":{"id":"references/guardrails","title":"Guardrails","description":"A proxy server that applies guardrails to requests and responses.","sidebar":"tutorialSidebar"},"references/index":{"id":"references/index","title":"API References","description":"Welcome to the API References section. Here you will find individual component API details.","sidebar":"tutorialSidebar"},"references/orchestrator":{"id":"references/orchestrator","title":"Orchestrator","description":"Overview","sidebar":"tutorialSidebar"},"references/stt":{"id":"references/stt","title":"Speech-To-Text (STT)","description":"Overview","sidebar":"tutorialSidebar"},"references/tts":{"id":"references/tts","title":"Text-To-Speech (TTS)","description":"Overview","sidebar":"tutorialSidebar"},"tutorials/bring_your_own_reasoning_agent":{"id":"tutorials/bring_your_own_reasoning_agent","title":"Build Your Own Reasoning Application","description":"In this tutorial, we will explore how to create an application with a custom reasoning agent using the xRx framework. The beauty of xRx is that it can accommodate any reasoning agent built in Python, offering flexibility and power for your AI applications.","sidebar":"tutorialSidebar"},"tutorials/changing_stt_providers":{"id":"tutorials/changing_stt_providers","title":"Changing STT providers","description":"xRx supports multiple Speech-to-Text (STT) providers, allowing you to choose the one that best fits your needs. This guide will walk you through the process of changing STT providers in your xRx deployment.","sidebar":"tutorialSidebar"},"tutorials/changing_tts_providers":{"id":"tutorials/changing_tts_providers","title":"Changing TTS providers","description":"xRx supports multiple Text-to-Speech (TTS) providers, allowing you to choose the one that best fits your needs. This guide will walk you through the process of changing TTS providers in your xRx deployment.","sidebar":"tutorialSidebar"},"tutorials/create_your_own_widgets":{"id":"tutorials/create_your_own_widgets","title":"Creating your own Widgets","description":"This guide explains how widgets are processed from the agent to the front-end and how you can create your own custom widgets.","sidebar":"tutorialSidebar"},"tutorials/enabling_llm_guardrails":{"id":"tutorials/enabling_llm_guardrails","title":"Enabling LLM Guardrails","description":"LLM guardrails are an important feature in the xRx system that help ensure the safety and reliability of AI interactions. This guide will walk you through the process of enabling and configuring LLM guardrails for your xRx deployment.","sidebar":"tutorialSidebar"},"tutorials/index":{"id":"tutorials/index","title":"Tutorials","description":"Welcome to the Tutorials section. Here you will find various tutorials for running xRx with different configurations.","sidebar":"tutorialSidebar"},"tutorials/run_patient_intake_application":{"id":"tutorials/run_patient_intake_application","title":"Run the Patient Intake Application","description":"This application provides an audio and visual experience for gathering information from a patient before they enter a doctor\'s office. As you talk, the screen fills in with the details you share, making reviewing your information easy in addition to verbal confirmation.","sidebar":"tutorialSidebar"},"tutorials/run_shopify_applications":{"id":"tutorials/run_shopify_applications","title":"Run the Shopify Application","description":"This application allows you to chat and interact with Shopify stores. There are two sample UIs in the application: a pizza store and an apparel store. It requires you to have a Shopify shop and API credentials.","sidebar":"tutorialSidebar"},"tutorials/setting_up_llm_observability":{"id":"tutorials/setting_up_llm_observability","title":"Enabling LLM Observability","description":"Through our own experimentation and development, we have found that observability is a critical component of debugging effective reasoning systems. It is highly recommended that you take advantage of this feature of the xRx repo to save yourself debugging time.","sidebar":"tutorialSidebar"},"tutorials/using_the_ui_debug_mode":{"id":"tutorials/using_the_ui_debug_mode","title":"Using the UI Debug Mode","description":"When you are using xRx, it is sometimes helpful to view the conversational interaction as text instead of purely audio. This tutorial will guide you through setting up and using the built in text debugging feature of the Next.js front end in xRx.","sidebar":"tutorialSidebar"}}}}')}}]);