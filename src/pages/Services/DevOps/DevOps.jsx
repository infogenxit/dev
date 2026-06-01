// DevOps Services Page
import React from "react";
import WebDevHero from "../../../sections/Technologies/CloudComputing/CloudComputingHero/CloudComputingHero";
import WebDevTech from "../../../sections/Technologies/CloudComputing/CloudComputingTech/CloudComputingTech";
import WebDevExpertise from "../../../sections/Technologies/CloudComputing/CloudComputingExperties/CloudComputingExpertise";
import WebDevOutcomes from "../../../sections/Technologies/CloudComputing/CloudComputingOutcomes/CloudComputingOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/CloudComputing/CloudComputingImpactCTA/CloudComputingImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import { PATHS } from "../../../route/paths";

const DevOps = () => {
  const devopsContent = [
    {
      heading: "What's Actually Slowing Your Team Down",
      content: [
        "Deployments are manual and inconsistent — different steps every time, depending on who's doing it.",
        "Environments don't match — something works in dev, breaks in staging, nobody knows why.",
        "No visibility into what's running — incidents get discovered by customers, not monitoring.",
        "Infrastructure is undocumented — the person who built it left 18 months ago.",
        "Releases happen infrequently — because they're risky and nobody wants to be on call.",
        "None of these are permanent problems. They're fixable. That's the work we do with our Brisbane DevOps Services."
      ]
    },
    {
      heading: "Our Brisbane DevOps Services — What We Actually Cover",
      content: [
        "CI/CD Pipeline Design and Implementation: Pushing updates shouldn’t turn into a late-night job. We set up CI/CD pipelines that make deployments smoother, cleaner, and far less stressful for your team. Once everything’s in place, code gets tested and deployed automatically instead of somebody doing it all by hand.",
        "Cloud Infrastructure Setup and Management: A lot of cloud environments start simple and slowly become a mess over time. Extra services, confusing permissions, rising monthly costs — it happens more often than people think. We help Brisbane businesses clean things up and build infrastructure that’s easier to manage day to day.",
        "Infrastructure as Code (IaC): We use tools like Terraform and CloudFormation to keep infrastructure organised properly. So instead of random manual setups and “I forgot how we configured this server,” everything stays documented and repeatable.",
        "Container Orchestration — Docker and Kubernetes: Docker and Kubernetes can make life easier, but only when they’re set up properly. We help manage deployments, scaling, and recovery so your applications stay stable without your team constantly babysitting servers.",
        "Monitoring, Alerting, and Observability: Most teams don’t realise there’s an issue until customers start emailing them. We set up proper monitoring and alerts so problems get picked up earlier, without spamming your team every five minutes.",
        "Security and Compliance Integration: Security shouldn’t be something added at the very end. We build it into the workflow from the beginning, helping your team catch vulnerabilities earlier and manage access properly as things grow.",
        "DevOps Consulting and Team Enablement: Sometimes you don’t need a huge DevOps overhaul. You just need experienced people to look at what’s slowing the team down and help improve it. That’s usually where we bring our Brisbane DevOps Services."
      ]
    },
    {
      heading: "Why Businesses Work With Infogenx for DevOps",
      content: [
        "We work with your existing stack — not around it. We don't push tools your team won't use or can't maintain.",
        "We document everything — every pipeline, every infrastructure decision, every configuration choice. If we left tomorrow, your team could keep going.",
        "We stay available — ongoing support isn't an upsell, it's part of how we work with clients.",
        "We explain what we're doing — no black boxes, no jargon for the sake of it. If your CTO or your ops lead wants to understand the setup, we walk them through it."
      ]
    },
    {
      heading: "Industries We Support",
      content: [
        "Financial services and fintech — where uptime and security compliance are non-negotiable.",
        "Healthcare and MedTech — managing data infrastructure with strict access controls.",
        "E-commerce and retail — handling traffic spikes and release cycles without taking the site down.",
        "SaaS and software companies — building deployment pipelines that support continuous delivery.",
        "Logistics and operations — integrating systems that need to talk to each other reliably."
      ]
    }
  ];

  const faqs = [
    {
      question: "We already have a developer handling DevOps on the side — do we still need this?",
      answer: "Probably. A developer handling DevOps part-time is doing two jobs poorly instead of one job well. It's not a criticism — it's just the reality of what happens when DevOps gets treated as an add-on responsibility. A dedicated setup means your developer can focus on building, and your infrastructure runs properly."
    },
    {
      question: "How disruptive is the transition to a proper DevOps setup?",
      answer: "Less than most people expect. We work around your existing release schedule and don't make big changes during critical periods. Migration is phased, tested, and rolled back if anything unexpected comes up."
    },
    {
      question: "We're a small team — is this overkill for us?",
      answer: "Small teams benefit the most from solid DevOps practices. When you're three or four people, one bad deployment taking down your environment for half a day is genuinely painful. Good pipelines and monitoring save small teams disproportionate amounts of time."
    },
    {
      question: "What cloud platforms do you work with?",
      answer: "AWS, Google Cloud, and Azure primarily. We also work with platform-as-a-service setups on Vercel, Railway, Render, and similar providers depending on what your application needs."
    },
    {
      question: "Can you take over DevOps from our current setup without starting from scratch?",
      answer: "Yes — and that's usually the better approach. We audit what exists, keep what works, and fix what doesn't. Starting from scratch is rarely necessary and almost always slower."
    }
  ];

  const breadcrumbItems = [
    { name: "Services", path: PATHS.home },
    { name: "DevOps Services", path: PATHS.devopsServices }
  ];

  return (
    <>
      <SEO
        title="Brisbane DevOps Services | Infogenx"
        description="If your team still dreads release day, something is broken — and it's probably not the code. Our Brisbane DevOps services help businesses build CI/CD pipelines, cloud infrastructure, and monitoring systems."
        keywords="devops, ci/cd, infrastructure as code, monitoring, security, brisbane devops"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <WebDevHero />
      <WebDevTech />
      <WebDevExpertise />
      <ServiceDetailedContent
        title="Brisbane DevOps Services – Reliable, Automated Deployments"
        subtitle="Transform Your Release Process"
        sections={devopsContent}
      />
      <WebDevOutcomes />
      <WebDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices
        items={[
          { title: "Implementation & Integration", description: "Seamless platform integration.", link: PATHS.implementationIntegration },
          { title: "Managed Services", description: "Proactive support & monitoring.", link: PATHS.managedServices }
        ]}
      />
    </>
  );
};

export default DevOps;
