import React from "react";
import Card from "./Card";

import image1 from "../Images/angelapoff.jpg";
import image2 from "../Images/domdagastino.jpg";
import image3 from "../Images/drnations.jpg";
import image4 from "../Images/thomassandberg.jpg";
import image5 from "../Images/thomasseyfried.png";
import image6 from "../Images/warburg.jpg";
import Nav from "./Nav";
import Footer from "./Footer";

import "../CSS/Resources.css";

function Resources(props) {
  return (
    <>
      <Nav />
      <div>
        <div>
          <Card
            imgsrc={image6}
            link="https://youtu.be/LXaO59IqQm8"
            title="OTTO WARBURG"
            description="Otto Warburg was a German biochemist from the 1920's who won a Nobel Prize for his research on Cancer. Most oncologists are clueless and haven't heard of him.  Warburg's central Theory was that Cancer cells in the presence of Oxygen are fermenting glucose as a source of ATP , which is how they fuel themselves. He hypothesized that cancer cells have damaged mitochondria and can not use oxygen this is why they made a switch to glucose, This is called the Warburg Effect. He said that the damage to the mitochondria has to be a chronic stressor to cause the mitochondrial damage otherwise the cancer cell will undergo apoptosis which is cell death. The warburg effect can be observed if you have cancer and they inject you with radioactive glucose when you have a pet scan and the cancer lights up like a Christmas tree."
            text="click to watch video"
          />
        </div>
        <div>
          <Card
            imgsrc={image5}
            link="https://youtu.be/g973tmkWFMI"
            title="DR. THOMAS SEYFRIED"
            description="Dr. Thomas Seyfried is a cancer researcher and biology Professor at Boston College. Seyfried resurrected Otto Warburg's Central theory. According to Seyfried's work Otto Warburg central theory was correcct but had a missing link. The missing link was found by Seyfried and collegues. The missing link is that cancer cells can use glucose and/or Glutamine. Yes most cancers share this anomoly and that some cancers use glucose only, or glucose and glutamine or they are glutamine driven. Oncologist know very little about Cancer cell metabolism. According to Seyfried's work, using Glioblastoma Multiforme(the deadliest of Brain Cancers) that a ketogenic diet can help reduce glucose to the cancer cells but the ketogenic diet is not a cure but it can slow done cancer cell growth. He states that you need to control glucose and glutamine simutaneously with a combination of ways of lowering glutamine and glucose using medications. Seyfried should win a Nobel Prize. Seyfried has a book called Cancer as a metabolic disease. There are a few doctors in some countries applying Dr seyfried's Press/Pulse Metabolic Therapy and having remarkable results."
            text="click to watch video"
          />
        </div>
        <div>
          <Card
            imgsrc={image2}
            link="https://youtu.be/3fM9o72ykww"
            title="DR. DOMINICK D'AGASTINO"
            description="Dr. Dominick D'Agastino laboratory develops and tests metabolic-based strategies for targeting CNS oxygen toxicity (seizures), epilepsy, neurodegenerative diseases, and cancer. To investigate the mechanism of these pathologies he uses a variety of in vivo and in vitro techniques, including radio-telemetry (EEG, EMG), electrophysiology, fluorescence microscopy, confocal microscopy, atomic force microscopy (AFM), biochemical assays and in vivo bioluminescence imaging.  His laboratory has adapted many of these techniques for use inside environmental chambers, which allows them to manipulate oxygen concentrations (from hypoxia to hyperbaric oxygen). His current project is to identify cellula4r mechanisms of seizures from CNS oxygen toxicity and to develop mitigation strategies against it. His efforts have focused specifically on measuring brain EEG, neuronal excitability, reactive oxygen species (ROS) production and biomarkers of oxidative stress.  The main focus of his lab over the last 10 years has been understanding the anticonvulsant and neuroprotective mechanism of the ketogenic diet and ketone metabolite supplementation. The shift in brain metabolism (from glucose to ketones) reduces neuronal hyperexcitability, oxidative stress and enhances brain energy metabolism. This approach can be used to treat a wide variety of pathologies linked pathophysiologically to metabolic dysregulation, including cancer."
            text="click to watch video"
          />
        </div>
        <div>
          <Card
            imgsrc={image1}
            link="https://youtu.be/sZv62GPCX4A"
            title="DR.ANGELA POFF"
            description="Angela completed her graduate work at the University of South Florida where she earned a Master’s degree and Ph.D. in Medical Sciences.  Angela worked as a postdoctoral research scholar in the Department of Molecular Pharmacology and Physiology at USF from 2014 – 2015.  Her research focuses on the development and characterization of metabolic-based, non-toxic therapies for cancer and neurological disorders.  She has presented her work at many national and international scientific conferences, including the Keystone Symposia on Tumor Metabolism, Federation of American Societies for Experimental Biology, and the Global Symposium on Ketogenic Therapies."
            text="click to watch video"
          />
        </div>
        <div>
          <Card
            imgsrc={image3}
            link="https://youtu.be/LLIu4smT7o4"
            title="DR. LAUREN NATIONS"
            description="Dr. Lauren Nations is a Veterinarian and owner of Veterinary Healthcare Associates in WinterHaven Florida. When Ketopet Sanctuary opened in Texas, he had heard that Ketopet was doing remarkable things for dogs with cancer by using a raw ketogenic diet in combination with Metabolic Conditioning and standard of care. Dr. Nations brought this back to his practice in Florida. Dr. Nations also is well versed in the book How to Starve Cancer by Jane McLelland, who cured herself of stage 4 cancer using a variety of offlabel drugs to hit the cancer cell metabolism. Dr. Nations will prescribe the main drug cocktail that Mclelland used if he sees fit."
            text="click to watch video"
          />
          <div className=""></div>
          <Card
            imgsrc={image4}
            link="http://longlivingpets.com"
            title="THOMAS SANDBERG"
            description="Thomas Sandberg has devoted his life to helping naturally heal dogs and cats that have cancer. He is an Animal Naturopath and he uses a raw ketogenic diet and Amygdalin and a variety of supplements depending on the cancer and what he has researched to help heal animals. He is the founder of longlivingpets.com"
            text="click to go to longlivingpets.com"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resources;
