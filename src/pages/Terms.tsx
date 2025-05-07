
import ScrollReveal from "@/components/ScrollReveal";

const Terms = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-zarsom-navy">
            Terms of Use
          </h1>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
          <ScrollReveal delay={100}>
            <div>
              <h2 className="text-2xl font-semibold text-zarsom-navy mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the ZARSOM Group website ("Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this site.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h2 className="text-2xl font-semibold text-zarsom-navy mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on ZARSOM Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose;</li>
                <li>Attempt to decompile or reverse engineer any software contained on ZARSOM Group's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by ZARSOM Group at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div>
              <h2 className="text-2xl font-semibold text-zarsom-navy mb-4">3. Disclaimer</h2>
              <p className="mb-4">
                The materials on ZARSOM Group's website are provided "as is". ZARSOM Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, ZARSOM Group does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <h2 className="text-2xl font-semibold text-zarsom-navy mb-4">4. Limitations</h2>
              <p className="mb-4">
                In no event shall ZARSOM Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ZARSOM Group's website, even if ZARSOM Group or a ZARSOM Group authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div>
              <h2 className="text-2xl font-semibold text-zarsom-navy mb-4">5. Revisions and Errata</h2>
              <p className="mb-4">
                The materials appearing on ZARSOM Group's website could include technical, typographical, or photographic errors. ZARSOM Group does not warrant that any of the materials on its website are accurate, complete or current. ZARSOM Group may make changes to the materials contained on its website at any time without notice. ZARSOM Group does not, however, make any commitment to update the materials.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div>
              <h2 className="text-2xl font-semibold text-zarsom-navy mb-4">6. Links</h2>
              <p className="mb-4">
                ZARSOM Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ZARSOM Group of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div>
              <h2 className="text-2xl font-semibold text-zarsom-navy mb-4">7. Site Terms of Use Modifications</h2>
              <p className="mb-4">
                ZARSOM Group may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div>
              <h2 className="text-2xl font-semibold text-zarsom-navy mb-4">8. Governing Law</h2>
              <p className="mb-4">
                Any claim relating to ZARSOM Group's website shall be governed by the laws of South Africa without regard to its conflict of law provisions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={900}>
            <div className="pt-8">
              <p className="text-sm text-gray-500 text-center">
                Last updated: May 7, 2025
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Terms;
