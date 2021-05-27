import React from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import Link from '../../components/link/link';

import Microscope from '../../images/icon/microscope.svg';
import Proteomics from '../../images/research/proteomics.svg';
import Serology from '../../images/research/serology.svg';
import Signalling from '../../images/research/signalling.svg';
import SystemsBiology from '../../images/research/systemsbiology.svg';

import './research.css';

const Research = () => (
  <Layout>
    <Head
      description="The research interests of Dr. Anne-Claude Gingras and active projects in the lab."
      title="Research"
    />
    <div className="research">
      <section>
        <header>
          <h1>
            Research
          </h1>
          <img
            alt="Microscope"
            height="25"
            src={Microscope}
          />
        </header>
        <div className="research__links">
          <Link nav to="/research/#proteomics">Proteomics</Link>
          <Link nav to="/research/#systemsbiology">Systems biology</Link>
          <Link nav to="/research/#signalling">Signalling</Link>
          <Link nav to="/research/#covid19">COVID-19 serology</Link>
          <Link nav to="/research/#funding">Funding</Link>
        </div>
        <section id="proteomics">
          <h2>Enabling tools for proteomics</h2>
          <figure>
            <img
              alt="AP-MS and BioID workflows"
              className="research__image-svg"
              src={Proteomics}
            />
            <figcaption>
              AP-MS and BioID workflows. Image courtesy of Kento Abe.
            </figcaption>
          </figure>
          <p>
            We are developing experimental and computational pipelines for proteomics, with a focus on interaction
            and affinity workflows. Experimentally, we have developed new sets of lentiviral vectors to express BioID
            fusions across multiple cell types (
            <Link to="https://www.mcponline.org/article/S1535-9476(20)32027-2/fulltext">
              Samavarchi-Tehrani,
              {' '}
              <span className="italic">
                MCP
              </span>
              {' '}
              2018
            </Link>
            ), and protocols to perform proximity-dependent biotinylation in zebrafish embryos (
            <Link to="https://www.biorxiv.org/content/10.1101/2021.05.16.444353v1">
              Rosenthal,
              {' '}
              <span className="italic">
                bioRχiv
              </span>
              {' '}
              2021
            </Link>
            ; with Ian Scott). Our current projects explore combining proximity-dependent biotinylation with
            {' '}
            <span className="italic">
              in vivo
            </span>
            {' '}
            crosslinking, looking at context-dependency with split enzymes, and developing approaches to perform
            proximity-dependent biotinylation extracellularly. Our computational tools range from a LIMS for
            proteomics (
            <Link to="https://www.nature.com/articles/nbt1010-1015">
              ProHits: Liu,
              {' '}
              <span className="italic">
                Nature Biotechnology
              </span>
              {' '}
              2010
            </Link>
            ) to tools for scoring protein-protein interactions (
            <Link to="https://www.nature.com/articles/nmeth.1541">
              SAINT: Choi,
              {' '}
              <span className="italic">
                Nature Methods
              </span>
              {' '}
              2011
            </Link>
            ;
            {' '}
            <Link to="https://www.nature.com/articles/nmeth.2557">
              CRAPome: Mellacheruvu,
              {' '}
              <span className="italic">
                Nature Methods
              </span>
              {' '}
              2013
            </Link>
            ), co-developed with Alexey Nesvizhskii, Hyungwon Choi and Mike Tyers. We also developed tools to
            visualize and further analyze interactions, most notably
            {' '}
            <Link to="https://www.nature.com/articles/nmeth.4330">
              ProHits-viz (Knight,
              {' '}
              <span className="italic">
                Nature Methods
              </span>
              {' '}
              2017)
            </Link>
            , and introduced
            {' '}
            <Link to="https://www.nature.com/articles/s41592-019-0477-9">
              GIX  (Knight,
              {' '}
              <span className="italic">
                Nature Methods
              </span>
              {' '}
              2019)
            </Link>
            , a browser extension for rapid annotation of gene products. With Alexey Nesvizhskii, Nuno Bandeira
            and Hannes Röst, we have contributed to the development of tools for the interpretation of Data
            Independent Acquisition results. Current efforts aim to improve the connectivity between all these
            computational tools.
          </p>
        </section>
        <section id="systemsbiology">
          <h2>Systems biology</h2>
          <figure>
            <img
              alt="Cartoon of a human cell with labelled organelles used for mapping"
              className="research__image-svg"
              src={SystemsBiology}
            />
            <figcaption>
              Targeted compartments for mapping the cell. Image courtesy of
              Kento Abe.
            </figcaption>
          </figure>
          <p>
            We have long taken a protein family-centric approach to explore specificity in the interactions
            established by kinases (
            <Link to="https://science.sciencemag.org/content/328/5981/1043.long">
              Breitkreutz,
              {' '}
              <span className="italic">
                Science
              </span>
              {' '}
              2010
            </Link>
            ; with Mike Tyers and Alexey Nesvizhskii), phosphatases (
            <Link to="https://www.cell.com/cell-reports/fulltext/S2211-1247(16)31513-3">
              St-Denis,
              {' '}
              <span className="italic">
                Cell Reports
              </span>
              {' '}
              2016
            </Link>
            ), bromodomain-containing proteins (
            <Link to="https://www.cell.com/molecular-cell/fulltext/S1097-2765(18)30948-1">
              Lambert,
              {' '}
              <span className="italic">
                Molecular Cell
              </span>
              {' '}
              2018
            </Link>
            ), and chaperones (
            <Link to="https://www.cell.com/cell/fulltext/S0092-8674(14)00740-5">
              Taipale,
              {' '}
              <span className="italic">
                Cell
              </span>
              {' '}
              2014
            </Link>
            ;
            {' '}
            <Link to="https://www.sciencedirect.com/science/article/abs/pii/S1097276521003178">
              Piette,
              {' '}
              <span className="italic">
                Molecular Cell
              </span>
              {' '}
              2021
            </Link>
            ). The introduction of proximity-dependent biotinylation in 2012 has now enabled us to provide
            an organelle-specific view of the proteome. We have notably described the proteome of cytosolic
            RNA-containing granules and bodies using BioID (
            <Link to="https://www.cell.com/molecular-cell/fulltext/S1097-2765(17)30977-2">
              Youn,
              {' '}
              <span className="italic">
                Molecular Cell
              </span>
              {' '}
              2018
            </Link>
            ;
            {' '}
            <Link to="https://www.cell.com/molecular-cell/fulltext/S1097-2765(19)30699-9">
              Youn,
              {' '}
              <span className="italic">
                Molecular Cell
              </span>
              {' '}
              2019
            </Link>
            ), and more recently, in collaboration with Eric Shoubridge, the organization of the human mitochondria (
            <Link to="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(20)30412-5">
              Antonicka,
              {' '}
              <span className="italic">
                Cell Metabolism
              </span>
              {' '}
              2020
            </Link>
            ). Lessons learned from these organelle-specific studies have enabled the establishment of a
            comprehensive proximity map of a human cell (
            <Link to="https://www.biorxiv.org/content/10.1101/796391v2">
              Go, Knight,
              {' '}
              <span className="italic">
                bioRχiv
              </span>
              {' '}
              2021
            </Link>
            ) and a dedicated website that enables user to navigate our results and analyze their own BioID
            experiments (
            <Link to="https://humancellmap.org">
              humancellmap.org
            </Link>
            ). We have also repurposed the humancellmap.org to help provide context to the proximity
            interactomes of SARS-CoV-2 proteins (
            <Link to="https://www.biorxiv.org/content/10.1101/2020.09.03.282103v1">
              Samavarchi-Tehrani,
              {' '}
              <span className="italic">
                bioRχiv
              </span>
              {' '}
              2021
            </Link>
            ;
            {' '}
            <Link to="https://covid19interactome.org">
              covid19interactome.org
            </Link>
            ). Some of the current projects in the lab involve high-resolution maps of nuclear bodies, exploration
            of dynamic changes in the proximal proteomes following induction of somatic cell reprogramming, and
            studying the consequences of alternative splicing on interactomes.
          </p>
        </section>
        <section id="signalling">
          <h2>Signalling</h2>
          <figure>
            <img
              alt="MTOR signalling at the lysosome membrane"
              className="research__image-svg"
              src={Signalling}
            />
            <figcaption>
              MTOR signalling at the lysosome membrane. Image courtesy of
              Geoff Hesketh.
            </figcaption>
          </figure>
          <p>
            Some of our core research interests have been the study of signaling pathways that are deregulated in
            cancers and rare diseases. In 2009, we identified the STRIPAK complex (STRiatin-Interacting Phosphatase
            And Kinase;
            {' '}
            <Link to="https://www.mcponline.org/article/S1535-9476(20)30850-1/abstract">
              Goudreault,
              {' '}
              <span className="italic">
                MCP
              </span>
              {' '}
              2009
            </Link>
            ) that plays important roles in the Hippo signaling pathway (
            <Link to="https://stke.sciencemag.org/content/6/302/rs15">
              Couzens,
              {' '}
              <span className="italic">
                Science Signaling
              </span>
              {' '}
              2013
            </Link>
            ) and in Cerebral Cavernous Malformations, a vascular disease. In collaboration with the Sicheri lab, we
            have defined the phospho-dependent recruitment of proteins in the core kinase cascade of the Hippo pathway (
            <Link to="https://www.mcponline.org/article/S1535-9476(20)32373-2/fulltext">
              Xiong,
              {' '}
              <span className="italic">
                MCP
              </span>
              {' '}
              2017
            </Link>
            ;
            {' '}
            <Link to="https://www.mcponline.org/article/S1535-9476(20)32372-0/fulltext">
              Couzens,
              {' '}
              <span className="italic">
                MCP
              </span>
              {' '}
              2017
            </Link>
            ), and have helped our Terry Fox Program co-investigators to identify additional components in this pathway.
            Our efforts on the context-dependent aspects of Cerebral Cavernous Malformation signaling will make use of
            our newly developed
            {' '}
            <span className="italic">
              in vivo
            </span>
            {' '}
            zebrafish biotinylation system. Through the use of proximity-dependent biotinylation sensors, we have
            uncovered that the free-amino acid sensing pathway for mTORC1 activation (the GATOR-Rag GTPase pathway)
            actively suppresses an alternative pathway that activates mTORC1 through amino acids produced from lysosomal
            degradation of proteins (
            <Link to="https://science.sciencemag.org/content/370/6514/351.long">
              Hesketh,
              {' '}
              <span className="italic">
                Science
              </span>
              {' '}
              2020
            </Link>
            ). Future work in this area includes a more comprehensive mapping of the mTORC1 network, as well as
            continued efforts, some with the labs of Jean-François Côté and Matthew Smith, in characterizing proximity
            networks for small GTPases. Additionally, we are also exploring receptor kinase signaling using
            proximity-dependent biotinylation, looking at both intracellular and extracellular interactions.
          </p>
        </section>
        <section id="covid19">
          <h2>COVID-19 serology</h2>
          <figure>
            <img
              alt="COVID-19 serology workflow"
              className="research__image-svg"
              src={Serology}
            />
            <figcaption>
              Serology workflows. Image courtesy of Kento Abe.
            </figcaption>
          </figure>
          <p>
            While the focus of the lab remains functional proteomics, systems biology and signal transduction,
            our expertise in protein-protein interactions and our affiliation with the
            {' '}
            <Link to="https://nbcc.lunenfeld.ca">
              Network Biology Collaborative Centre (NBCC)
            </Link>
            {' '}
            placed us in an excellent position to develop antibody-based assays for COVID-19 in March
            2020. We received early funding through the
            {' '}
            <Link to="https://supportsinai.ca">
              Sinai Foundation
            </Link>
            , from the
            {' '}
            <Link to="https://www.krembilfoundation.ca">
              Krembil Foundation
            </Link>
            {' '}
            and the
            {' '}
            <Link to="https://www.rbc.com/community-social-impact/">
              RBC Foundation
            </Link>
            {' '}
            that enabled us to build assays. With Jim Rini, we developed a protein-based
            neutralization surrogate for SARS-CoV-2 (
            <Link to="https://insight.jci.org/articles/view/142362">
              Abe,
              {' '}
              <span className="italic">
                JCI Insight
              </span>
              {' '}
              2020
            </Link>
            ) and re-implemented a lentiviral neutralization surrogate assay introduced by Jesse Bloom. We
            partnered with colleagues at the
            {' '}
            <Link to="https://nrc.canada.ca">
              National Research Council of Canada (NRC)
            </Link>
            , the
            {' '}
            <Link to="https://www.canada.ca/en/public-health/programs/national-microbiology-laboratory.html">
              National Microbiology Laboratory (NML)
            </Link>
            , colleagues in the
            {' '}
            <Link to="http://www.tibdn.ca">
              Toronto Invasive Bacterial Diseases Network (TIBDN)
            </Link>
            {' '}
            and the
            {' '}
            <Link to="https://www.blood.ca">
              Canadian Blood Services
            </Link>
            {' '}
            to develop high-throughput serology assays at the NBCC. These assays have been developed by a
            dedicated team, co-led by Anne-Claude and NBCC manager Karen Colwill. The assays have been used notably
            to demonstrate, in a collaboration with Jen Gommerman and Allison McGeer, that anti-spike antibodies
            in the blood and saliva of infected individuals lasted for at least 3-4 months (the latest time point
            collected in that particular study;
            {' '}
            <Link to="https://immunology.sciencemag.org/content/5/52/eabe5511.long">
              Isho,
              {' '}
              <span className="italic">
                Science Immunology
              </span>
              {' '}
              2020
            </Link>
            ). The assays are now used for &gt;40 different projects across the country that monitor seroprevalence or
            antibody levels following infection or vaccination, many funded through the
            {' '}
            <Link to="https://cihr-irsc.gc.ca">
              Canadian Institutes of Health Research (CIHR)
            </Link>
            {' '}
            and the
            {' '}
            <Link to="https://www.covid19immunitytaskforce.ca">
              COVID-19 Immunity Task Force (CITF)
            </Link>
            . Several of the studies in vaccinated populations focus on individuals with compromised immune systems,
            including residents of long-term care homes (with Sharon Straus and Allison McGeer), patients receiving
            dialysis (with Michelle Hladunewich), older individuals (with Sharon Walmsley), and patients with
            autoimmune disease (with Vinod Chandran, Tania Watts, Mark Silverberg, Sasha Bernatsky and Dawn
            Bowdish). We also contribute to development of new therapeutics and vaccines (see, e.g.
            {' '}
            <Link to="https://www.biorxiv.org/content/10.1101/2021.05.11.443286v1">
              Liu,
              {' '}
              <span className="italic">
                bioRχiv
              </span>
              {' '}
              2021
            </Link>
            ). Lastly, Anne-Claude leads the Pillar 3: Functional Genomics and Structure/Function group for the newly
            funded CIHR network for Variants of Concern (CoVaRR-Net), led by Marc-André Langlois at the University
            of Ottawa.
          </p>
        </section>
        <section id="funding">
          <h2>Funding</h2>
          <p>
            We are grateful to the following agencies for supporting the projects in the Gingras
            lab and the LTRI proteomics group:
          </p>
          <ul>
            <li><Link to="http://www.cihr-irsc.gc.ca">Canadian Institutes of Health Research</Link></li>
            <li><Link to="http://www.nserc-crsng.gc.ca">Natural Sciences and Engineering Research Council</Link></li>
            <li><Link to="https://www.cancer.ca/research">Canadian Cancer Society Research Institute</Link></li>
            <li><Link to="https://www.crs-src.ca/">Cancer Research Society</Link></li>
            <li><Link to="https://www.genomecanada.ca">Genome Canada</Link></li>
            <li><Link to="https://www.ontariogenomics.ca/">Ontario Genomics Institute</Link></li>
            <li><Link to="https://www.innovation.ca/">Canada Foundation for Innovation</Link></li>
            <li><Link to="https://www.nih.gov/">National Institutes of Health</Link></li>
            <li><Link to="http://www.cihr-irsc.gc.ca/e/13147.html">CIHR Institute of Genetics</Link></li>
            <li><Link to="https://www.computecanada.ca/">Compute Canada</Link></li>
            <li><Link to="http://www.chairs-chaires.gc.ca/home-accueil-eng.aspx">Canada Research Chair</Link></li>
          </ul>
        </section>
      </section>
    </div>
  </Layout>
);

export default Research;
