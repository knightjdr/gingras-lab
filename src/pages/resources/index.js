import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql, Link } from 'gatsby';

import Head from '../../components/head';
import Layout from '../../components/layout';

import Database from '../../images/icon/database.svg';
import File from '../../images/icon/file-alt.svg';
import Flask from '../../images/icon/flask.svg';
import Save from '../../images/icon/save.svg';
import Server from '../../images/icon/server.svg';

import './resources.css';

export const query = graphql`
  query {
    geneInfo: file(relativePath: { eq: "resource/gene-info.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 250) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    prohitsViz: file(relativePath: { eq: "resource/prohits-viz.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 189) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    diaUmpire: file(relativePath: { eq: "resource/dia-umpire.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 47) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

const Resources = ({ data }) => (
  <Layout>
    <Head title="Resources" />
    <div className="resources">
      <section>
        <header>
          <h1>
          Resources
          </h1>
          <img
            alt="Computer server"
            height="25"
            src={Server}
          />
        </header>
        <div className="resources__links">
          <Link className="nav-link" to="/resources/#software">Software</Link>
          <Link className="nav-link" to="/resources/#protocols">Protocols</Link>
          <Link className="nav-link" to="/resources/#reagents">Reagents</Link>
          <Link className="nav-link" to="/resources/#data">Data</Link>
        </div>
        <section className="resources__resource">
          <header>
            <h2 id="software">Software</h2>
            <img
              alt="Floppy disk"
              height="20"
              src={Save}
            />
          </header>
          <ul>
            <li>
              <h3>Gene Information eXtension (GIX)</h3>
              <div className="resources__resource-description resource__gene-info">
                <div>
                  <p>
                    Gene Information eXtension (GIX) is a browser extension for Chrome and
                    Firefox that allows users to retrieve gene information directly on any
                    website simply by double clicking a gene name. It supports several
                    organisms and gene reports are customizable.
                  </p>
                  <ul>
                    <li><a href="https://gene-info.org">GIX</a></li>
                    <li><a href="https://www.nature.com/articles/s41592-019-0477-9">Publication</a></li>
                  </ul>
                </div>
                <div className="resource__image">
                  <Img
                    alt="Screenshot of GIX report on PubMed"
                    fixed={data.geneInfo.childImageSharp.fixed}
                  />
                </div>
              </div>
            </li>
            <li>
              <h3>ProHits-viz</h3>
              <div className="resources__resource-description resource__prohits-viz">
                <div>
                  <p>
                    James Knight developed interactive analysis visualization tools for interaction
                    proteomics that enable organizing bait-prey data as heat maps or dot plots,
                    quantitatively comparing two baits, calculating the specificity of preys across
                    baits jointly analyzed, and analyzing the prey-prey relationships (a feature
                    that is most useful for proximity biotinylation studies). With a simple
                    text-based input compatible with SAINT or CRAPome outputs, this web-based
                    resource should facilitate interaction proteomics analysis and visualization.
                  </p>
                  <ul>
                    <li><a href="https://prohits-viz.lunenfeld.ca">ProHits-viz</a></li>
                    <li><a href="https://www.nature.com/articles/nmeth.4330">Publication</a></li>
                  </ul>
                </div>
                <div className="resource__image">
                  <Img
                    alt="Screenshot of ProHits-viz home page"
                    fixed={data.prohitsViz.childImageSharp.fixed}
                  />
                </div>
              </div>
            </li>
            <li>
              <h3>ProHits 4.0: Ready for DIA analysis</h3>
              <p>
                Guomin (Frank) Liu and colleagues in the Gingras,
                {' '}
                <a href="https://www.nesvilab.org/">Nesvizhskii</a>
                ,
                {' '}
                <a href="http://proteomics.ucsd.edu/">Bandeira</a>
                ,
                {' '}
                <a href="https://www.cssblab.org/">Choi</a>
                ,
                {' '}
                <a href="https://www.iric.ca/en/research/principal-investigators/michael-tyers/">Tyers</a>
                {' '}
                and
                {' '}
                <a href="http://www.raughtlab.ca/homev2.php">Raught</a>
                {' '}
                labs release a major update to the ProHits LIMS. In ProHits 4.0, Data Independent
                Acquisition (DIA) is handled through
                {' '}
                <a href="http://diaumpire.sourceforge.net/">DIA-Umpire</a>
                ,
                {' '}
                <a href="http://proteomics.ucsd.edu/software-tools/msplit-dia//">MSPLIT-DIA</a>
                ,
                {' '}
                <a href=" http://mapdia.sourceforge.net/Main.html">mapDIA</a>
                {' '}
                and
                {' '}
                <a href=" http://saint-apms.sourceforge.net/Main.html">SAINT-intensity</a>
                .
                ProHits 4.0 also facilitates data deposition in public repositories such as
                MassIVE and the transfer of data to new visualization tools we have developed.
              </p>
              <ul>
                <li><a href="http://prohitsms.com/Prohits_download/list.php">ProHits</a></li>
                <li><a href="https://www.sciencedirect.com/science/article/pii/S1874391916301749?via%3Dihub">Publication</a></li>
              </ul>
            </li>
            <li>
              <h3>DIA-Umpire: Integrated solution for Data Independent Acquisition</h3>
              <div className="resource__image">
                <Img
                  alt="DIA-Umpire logo"
                  fixed={data.diaUmpire.childImageSharp.fixed}
                />
              </div>
              <p>
                Chih-Chiang Tsou from the
                {' '}
                <a href="https://www.nesvilab.org/">Nesvizhskii lab</a>
                {' '}
                developed, in collaboration with the Gingras lab, DIA-Umpire, an integrated platform
                for untargeted and semi-targeted identification and quantification from Data
                Independent Acquisition. DIA-Umpire works on the basis of demultiplexing complex
                spectra through retention time alignment of MS1 and MS2 peaks and generation of
                pseudo-MS/MS spectra that can be searched using standard tools developed for shotgun
                proteomics. DIA-Umpire is integrated in the next public release of ProHits, in
                addition to being available as a stand-alone tool.
              </p>
              <ul>
                <li><a href="http://diaumpire.sourceforge.net">DIA-Umpire</a></li>
                <li><a href="https://www.nature.com/nmeth/journal/v12/n3/full/nmeth.3255.html">Publication</a></li>
              </ul>
            </li>
            <li>
              <h3>MSPLIT-DIA: spectral matching tool for Data Independent Acquisition</h3>
              <p>
                Jian Wang from the
                {' '}
                <a href="http://proteomics.ucsd.edu/">Bandeira lab</a>
                {' '}
                developed, in collaboration with the Gingras lab, MSPLIT-DIA, a spectral library
                matching tool for Data Independent Analysis. MSPLIT-DIA demultiplexes complex
                spectra through spectral projection, leading to the sensitive identification of
                peptides in DIA data. Used as a stand-alone, MSPLIT-DIA performs sensitive spectral
                counting compatible with SAINT analysis, and can also generate assay-specific
                libraries for targeted re-extraction.
              </p>
              <ul>
                <li><a href="http://proteomics.ucsd.edu/software-tools/msplit-dia/">MSPLIT</a></li>
                <li><a href="http://www.nature.com/nmeth/journal/vaop/ncurrent/full/nmeth.3655.html">Publication</a></li>
              </ul>
            </li>
            <li>
              <h3>SAINT series of software tools</h3>
              <p>
                Significance Analysis of INTeractome (SAINT) tools for interaction scoring were
                initially developed for unsupervised analysis of interactome data (
                <a href="https://science.sciencemag.org/content/328/5981/1043.long">Science, 2010</a>
                ),
                {' '}
                but rapidly adapted by
                {' '}
                <a href="https://www.cssblab.org/">Hyungwon Choi</a>
                {' '}
                (
                <a href="https://www.nature.com/nmeth/journal/v8/n1/full/nmeth.1541.html">Nat Methods, 2011</a>
                ),
                for semi-supervised analysis of spectral-count based interaction proteomics data
                using negative controls. More recent advances include the extension to intensity
                data (
                <a href="https://pubs.acs.org/doi/abs/10.1021/pr201185r">JPR, 2012</a>
                ),
                {' '}
                the implementation of the computationally efficient SAINTexpress
                (
                <a href="https://www.sciencedirect.com/science/article/pii/S1874391913005381?via%3Dihub">J Proteomics, 2015</a>
                )
                and in 2016, the extension of the SAINT-intensity framework to peptides and
                transitions, for adaptation to Data Independent Analysis (DIA) data
                (
                <a href="https://onlinelibrary.wiley.com/doi/10.1002/pmic.201500499/abstract">Proteomics, 2016</a>
                ).
              </p>
              <ul>
                <li>
                  <a href="http://saint-apms.sourceforge.net/Main.html">SAINT</a>
                  {' '}
                  is maintained by
                  {' '}
                  <a href="https://www.cssblab.org">Hyungwon Choi</a>
                  .
                </li>
                <li>
                  SAINT scoring is implemented within the
                  {' '}
                  <a href="http://prohitsms.com">ProHits LIMS</a>
                  ,
                  {' '}
                  in the Contaminant Repository for Affinity Purification
                  (
                  <a href="https://crapome.org/">CRAPome</a>
                  )
                  and for use with our visualization tools
                  (
                  <a href="https://prohits-viz.lunenfeld.ca/">ProHits-viz</a>
                  ).
                </li>
              </ul>
            </li>
            <li>
              <h3>ProHits-web: web-accessible quantitative interaction repository</h3>
              <p>
                Interaction proteomics repository for the Gingras lab and our collaborators.
                The repository is meant to support publications by offering access to high
                quality quantitative interaction proteomics data and other supplementary
                material through easy graphical user interfaces. We also use the resource to
                give password-protected access to specific datasets to collaborators
                and/or reviewers. Developed by JianPian Zhang and Guomin (Frank) Liu.
              </p>
              <ul>
                <li><a href="https://prohits-web.lunenfeld.ca/">ProHits-web</a></li>
                <li><a href="https://stke.sciencemag.org/content/6/302/rs15.long">Publication</a></li>
                <li>
                  Major datasets currently in ProHits-web include: the HSP90 co-chaperone
                  specificity dataset
                  (
                  <a href="https://www.sciencedirect.com/science/article/pii/S0092867414007405">Taipale et al., Cell, 2014</a>
                  ),
                  {' '}
                  an interaction dataset for the myotubularin phosphatases
                  (
                  <a href="https://www.mcponline.org/content/14/4/946.long">St-Denis et al., Mol Cell Proteomics, 2015</a>
                  )
                  and a comprehensive map of the centrosome-cilium interface
                  {' '}
                  (
                  <a href="https://www.sciencedirect.com/science/article/pii/S009286741501421X">Gupta et al., Cell, 2015</a>
                  ).
                </li>
              </ul>
            </li>
            <li>
              <h3>CRAPome: Contaminant Repository for Affinity Purification</h3>
              <p>
                Database of annotated negative controls contributed by the research community to
                help distinguish real interactions from the non-specific background.
              </p>
              <ul>
                <li>
                  <a href="https://crapome.org/">CRAPome</a>
                  ,
                  designed by Datta Mellacheruvu and Zach Wright
                  (
                  <a href="https://www.nesvilab.org/">Nesvizhskii lab</a>
                  ).
                </li>
                <li><a href="https://www.nature.com/nmeth/journal/vaop/ncurrent/full/nmeth.2557.html">Publication</a></li>
              </ul>
            </li>
            <li>
              <h3>ProHits - interaction proteomics LIMS</h3>
              <p>
                This software helps manage interaction proteomics data. Developed by Guomin
                (Frank) Liu and JianPian Zhang.
              </p>
              <ul>
                <li><a href="http://prohitsms.com">ProHits</a></li>
                <li><a href="https://www.nature.com/articles/nbt1010-1015">Publication</a></li>
              </ul>
            </li>
            <li>
              <h3>SAINT version 1 - unsupervised model</h3>
              <p>
                SAINT version 1.0 allows users to define interaction significance based on
                label-free quantitative AP-MS data (optimized for large-scale datasets with no
                control runs).
              </p>
              <ul>
                <li><a href="http://saint-apms.sourceforge.net/Main.html">SAINT</a></li>
                <li><a href="https://science.sciencemag.org/content/328/5981/1043">Publication</a></li>
              </ul>
            </li>
            <li>
              <h3>Nested clusters</h3>
              <p>
                This software helps in the identification of protein complexes from AP-MS data.
              </p>
              <ul>
                <li>
                  <a href="http://nestedcluster.sourceforge.net/">Nested cluster</a>
                  ,
                  developed by
                  {' '}
                  <a href="https://www.cssblab.org/">Hyungwon Choi</a>
                  .
                </li>
                <li><a href="https://www.embopress.org/doi/full/10.1038/msb.2010.41">Publication</a></li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="resources__resource">
          <header>
            <h2 id="protocols">Protocols</h2>
            <img
              alt="File"
              height="20"
              src={File}
            />
          </header>
          <ul>
            <li>
              <h3>Affinity-purification coupled to mass spectrometry in human cells</h3>
              <h4>Protocols</h4>
              <ul>
                <li><a href="/doc/Mammalian TAP protocols.pdf">Mammalian TAP AP-MS</a></li>
                <li><a href="/doc/Gingras lab protocol for FLAG AP.pdf">Mammalian FLAG AP-MS</a></li>
              </ul>
              <p>
                Sources:
                {' '}
                <a href="https://www.mcponline.org/content/4/11/1725.long">Gingras et al., Mol Cell Proteomics, 2005</a>
                ;
                {' '}
                <a href="https://www.sciencedirect.com/science/article/pii/S1046202307000394?via%3Dihub">Chen and Gingras, Methods, 2007</a>
                ;
                {' '}
                <a href="http://www.jbc.org/content/283/43/29273.long">Chen et al., J Biol Chem, 2008</a>
                ;
                {' '}
                <a href="https://www.mcponline.org/content/8/1/157.long">Goudreault et al., Mol Cell Proteomics, 2009</a>
              </p>
            </li>
            <li>
              <h3>Mammlian FLAG AP-MS Protocols</h3>
              <h4>Protocols</h4>
              <ul>
                <li><a href="/doc/Anti-FLAG Magnetic beads 2012.pdf">Anti-FLAG AP-MS with Magnetic beads 2012</a></li>
                <li><a href="/doc/Anti-FLAG Agarose beads 2012.pdf">Anti-FLAG AP-MS with Agarose beads 2012</a></li>
                <li><a href="/doc/293 Flp-In FLAG magnetic AP -  July 2013.pdf">293 Flp-In FLAG magnetic AP - July 2013</a></li>
              </ul>
              <p>
                Source:
                {' '}
                <a href="https://www.sciencedirect.com/science/article/pii/S1046202312001375?via%3Dihub">Kean et al., Methods, 2012</a>
              </p>
            </li>
            <li>
              <h3>Affinity-purification coupled to mass spectrometry in S. cerevisiae</h3>
              <h4>Protocols</h4>
              <ul>
                <li><a href="/doc/Yeast_TAP_acg.pdf">Yeast TAP AP-MS</a></li>
                <li><a href="/doc/Yeast_HA_FLAG.pdf">Yeast HA or FLAG AP-MS</a></li>
              </ul>
              <p>
                Source:
                {' '}
                <a href="https://science.sciencemag.org/content/328/5981/1043.long">Breitkreutz et al., Science, 2010</a>
              </p>
            </li>
            <li>
              <h3>293 Flp-In FLAG magnetic chromatin optimized AP protocol</h3>
              <h4>Protocol</h4>
              <ul>
                <li><a href="/doc/293 Flp-In FLAG magnetic chromatin optimized AP - July 2013.pdf">293 Flp-In FLAG magnetic chromatin optimized AP - July 2013</a></li>
              </ul>
              <p>
                Source:
                {' '}
                <a href="https://www.sciencedirect.com/science/article/pii/S1874391914004357?via%3Dihub">Lambert et al., J Proteomics, 2015</a>
              </p>
            </li>
            <li>
              <h3>Flp-In BioID Streptavidin sepharose chromatin optizided</h3>
              <h4>Protocol</h4>
              <ul>
                <li><a href="/doc/BirA Purification Chromatin Optimized protocol-JPL.pdf">Flp-In BioID Streptavidin sepharose chromatin optizided</a></li>
              </ul>
              <p>
                Source:
                {' '}
                <a href="https://www.sciencedirect.com/science/article/pii/S1874391914004357?via%3Dihub">Lambert et al., J Proteomics, 2015</a>
              </p>
            </li>
            <li>
              <h3>Flp-In BioID Streptavidin sepharose protocol</h3>
              <h4>Protocol</h4>
              <ul>
                <li><a href="/doc/Flp-In BioID Streptavidin sepharose - Jul 2013.pdf">Flp-In BioID Streptavidin sepharose - Jul 2013</a></li>
              </ul>
              <p>
                Source:
                {' '}
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/24255178">Couzens et al., Sci Signal, 2013</a>
              </p>
            </li>
          </ul>
        </section>
        <section className="resources__resource">
          <header>
            <h2 id="reagents">Reagents</h2>
            <img
              alt="Flask"
              height="20"
              src={Flask}
            />
          </header>
          <ul>
            <li>
              <h3>Cloning vector - pcDNA5-FRT-FLAG & pcDNA5-FRT-eGFP</h3>
              <p>
                Sequence of the cloning vector pcDNA5-FRT-FLAG and pcDNA5-FRT-eGFP, for N-terminal
                tagging and expression in the Invitrogen Flp-In T-REx system.
              </p>
              <h4>Sequence</h4>
              <ul>
                <li><a href="/doc/V4131_DNA.doc">pcDNA5-FRT-eGFP</a></li>
                <li><a href="/doc/V4071_DNA.doc">pcDNA5-FRT-FLAG</a></li>
              </ul>
              <h4>Map</h4>
              <ul>
                <li><a href="/doc/V4071_map.pdf">pcDNA5-FRT-FLAG</a></li>
                <li><a href="/doc/V4131_map.pdf">map of pcDNA5-FRT-eGFP</a></li>
              </ul>
              <p>
                Source:
                {' '}
                <a href="http://www.jbc.org/content/286/28/25065.long">Kean et al., J Biol Chem, 2011</a>
              </p>
            </li>
            <li>
              <h3>Cloning Vectors: pDEST-pcDNA5-FLAG N-term & pDEST-pcDNA5-FLAG C-term</h3>
              <p>
                Gateway compatible vectors for N-terminal or C-terminal tagging and expression in
                the Invitrogen Flp-In T-REx system.
              </p>
              <h4>Sequence</h4>
              <ul>
                <li><a href="/doc/V4978_pDEST_pcDNA5_Flag_Nterm_DNA.docx">pDEST_pcDNA5_Flag_N-term</a></li>
                <li><a href="/doc/V4869_pDEST_pcDNA5_Flag_Cterm_DNA.docx">pDEST_pcDNA5_Flag_C-term</a></li>
              </ul>
              <h4>Map</h4>
              <ul>
                <li><a href="/doc/V4978_pDEST_pcDNA5_Flag-_NtermMap.pdf">pDEST_pcDNA5_Flag_N-term</a></li>
                <li><a href="/doc/V4869_pDEST_pcDNA5_Flag-Cterm_map.pdf">pDEST_pcDNA5_Flag_C-term</a></li>
              </ul>
              <p>
                Source:
                {' '}
                <a href="https://stke.sciencemag.org/content/6/302/rs15.long">Couzens et al., Sci Signal, 2013</a>
              </p>
            </li>
            <li>
              <h3>
                BioID Cloning Vectors: pDEST-pcDNA5-BirA-FLAG N-term & pDEST-pcDNA5-BirA-FLAG C-term
              </h3>
              <p>
                Gateway compatible vectors for N-terminal or C-terminal tagging and expression in
                the Invitrogen Flp-In T-REx system for BioID.
              </p>
              <h4>Sequence</h4>
              <ul>
                <li><a href="/doc/V8164_pDEST_pcDNA5_BirA-FLAG_Nterm_DNA.docx">pDEST_pcDNA5_BirA-FLAG_Nterm</a></li>
                <li><a href="/doc/V8449_pDEST_pcDNA5_BirA-FLAG_Cterm_DNA.docx">pDEST_pcDNA5_BirA-FLAG_Cterm</a></li>
              </ul>
              <h4>Map</h4>
              <ul>
                <li><a href="/doc/V8164_pDEST_pcDNA5_BirA-FLAG_Nterm_Map.pdf">pDEST_pcDNA5_BirA-FLAG_Nterm</a></li>
                <li><a href="/doc/V8449_pDEST_pcDNA5_BirA-FLAG_Cterm_Map.pdf">pDEST_pcDNA5_BirA-FLAG_Cterm</a></li>
              </ul>
              <p>
                Source:
                {' '}
                <a href="https://stke.sciencemag.org/content/6/302/rs15.long">Couzens et al., Sci Signal, 2013</a>
              </p>
            </li>
            <li>
              <h3>
                BioID control vectors: pDEST-pcDNA5-BirA-FLAG-GFP and pDEST-pcDNA5-FLAG-NLS-BirA
              </h3>
              <p>
                Vector controls for use with Invitrogen’s Flp-In T-REx system for BioID. Please
                refer to Couzens et al., 2013 in any publication using the BirA-FLAG-GFP vector and
                to Lambert et al, 2015 for the FLAG-NLS-BirA vector.
              </p>
              <h4>Sequence</h4>
              <ul>
                <li><a href="/doc/pDEST-pcDNA5-BirA-FLAG-GFP_V8383_DNA.docx">pDEST-pcDNA5-BirA-FLAG-GFP</a></li>
                <li><a href="/doc/pDEST-pcDNA5-FLAG-NLS-BirA_V9733_DNA.docx">pDEST-pcDNA5-FLAG-NLS-BirA</a></li>
              </ul>
              <p>
                Sources:
                {' '}
                <a href="https://stke.sciencemag.org/content/6/302/rs15.long">Couzens et al., Sci Signal, 2013</a>
                ;
                {' '}
                <a href="https://www.sciencedirect.com/science/article/pii/S1874391914004357?via%3Dihub">Lambert et al., J Proteomics, 2015</a>
              </p>
            </li>
          </ul>
        </section>
        <section className="resources__resource">
          <header>
            <h2 id="data">Data</h2>
            <img
              alt="Database server"
              height="20"
              src={Database}
            />
          </header>
          <ul>
            <li>
              <h3>Interaction data now at ProHits-web</h3>
              <p>
                Since 2013, our datasets are released through ProHits-web. We also deposit curated
                interaction lists at
                {' '}
                <a href="https://www.ebi.ac.uk/intact/">IntAct</a>
                {' '}
                and
                {' '}
                <a href="https://thebiogrid.org/">BioGRID</a>
                {' '}
                and our mass spectrometry data at
                {' '}
                <a href="https://massive.ucsd.edu/ProteoSAFe/static/massive.jsp">MassIVE</a>
                .
              </p>
            </li>
            <li>
              <h3>Breitkreutz et al., Science, 2010</h3>
              <p>
                &ldqio;A global protein kinase and phosphatase interaction network in yeast&rdqio;.
                High-confidence interactions were deposited in the
                {' '}
                <a href="https://thebiogrid.org/">BioGrid</a>
                {' '}
                and
                {' '}
                <a href="https://www.ebi.ac.uk/intact">IntAct</a>
                {' '}
                databases.
              </p>
              <ul>
                <li>
                  <a href="https://www.yeastkinome.com/">YeastKinome.org</a>
                  ,
                  developed by C Stark and BJ Breitkreutz.
                </li>
              </ul>
            </li>
            <li>
              <h3>Goudreault et al., Mol Cell Proteomics, 2009</h3>
              <p>
                All reported interactions were deposited in the
                {' '}
                <a href="https://thebiogrid.org/">BioGrid</a>
                {' '}
                and
                {' '}
                <a href="http://www.ebi.ac.uk/intact">IntAct</a>
                {' '}
                interaction databases.
              </p>
              <ul>
                <li><a href="/doc/Sup_Table_S4_v30.xls">TAP AP-MS data (Sup Table 4)</a></li>
                <li><a href="/doc/Sup_Table_S5_V30.xls">FLAG AP-MS data (Sup Table 5)</a></li>
              </ul>
            </li>
            <li>
              <h3>Chen et al., J Biol Chem, 2008</h3>
              <p>
                All reported interactions were deposited in the
                {' '}
                <a href="https://thebiogrid.org/">BioGrid</a>
                {' '}
                and
                {' '}
                <a href="http://www.ebi.ac.uk/intact">IntAct</a>
                {' '}
                interaction databases.
              </p>
            </li>
          </ul>
        </section>
      </section>
    </div>
  </Layout>
);

Resources.propTypes = {
  data: PropTypes.shape({
    geneInfo: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    prohitsViz: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    diaUmpire: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Resources;
