import Link from "next/link";
import Image from "next/image";

import {
  Sparkles,
  FileText,
  Brain,
  Download,
  ArrowRight,
  CheckCircle2,
  Menu,
} from "lucide-react";

export default function HomePage() {

  return (

    <main className="min-h-screen bg-[#F7F7F7] overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative px-4 sm:px-6 lg:px-10 pt-5 sm:pt-8 pb-20">

        {/* NAVBAR */}

        <div className="
                    w-full
                    bg-white/90
                    backdrop-blur-md
                    rounded-[24px]
                    lg:rounded-[32px]
                    px-4
                    sm:px-6
                    lg:px-8
                    py-4
                    flex
                    items-center
                    justify-between
                    shadow-sm
                    border
                    border-[#ECECEC]
                ">

          {/* LEFT */}

          <div className="flex items-center gap-3">

            <div className="relative w-12 h-12 sm:w-14 sm:h-14">

              <Image
                src="/logo.png"
                alt="VedaAI"
                fill
                sizes="100px"
                className="object-contain"
              />
            </div>

            <h1 className="
                            text-[30px]
                            sm:text-[36px]
                            lg:text-[42px]
                            font-bold
                            text-[#2D2D2D]
                        ">
              VedaAI
            </h1>
          </div>


          {/* CENTER LINKS */}

          <div className="
                        hidden
                        lg:flex
                        items-center
                        gap-10
                        text-[18px]
                        font-medium
                        text-[#5F5F5F]
                    ">

            <button className="hover:text-black transition-all">
              Features
            </button>

            <button className="hover:text-black transition-all">
              Dashboard
            </button>

            <button className="hover:text-black transition-all">
              About
            </button>
          </div>


          {/* RIGHT */}

          <div className="flex items-center gap-3">

            {/* MOBILE MENU */}

            <button className="
                            lg:hidden
                            w-12
                            h-12
                            rounded-2xl
                            bg-[#F5F5F5]
                            flex
                            items-center
                            justify-center
                        ">
              <Menu size={24} />
            </button>

            {/* DASHBOARD BTN */}

            <Link href="/assignments">

              <button className="
                                hidden
                                sm:flex
                                bg-black
                                text-white
                                px-6
                                lg:px-7
                                py-4
                                rounded-full
                                items-center
                                gap-2
                                hover:scale-105
                                transition-all
                                shadow-lg
                            ">

                Open Dashboard

                <ArrowRight size={18} />

              </button>
            </Link>
          </div>
        </div>


        {/* HERO CONTENT */}

        <div className="
                    grid
                    lg:grid-cols-2
                    gap-16
                    items-center
                    mt-14
                    lg:mt-20
                ">

          {/* LEFT */}

          <div>

            {/* BADGE */}

            <div className="
                            inline-flex
                            items-center
                            gap-2
                            bg-white
                            border
                            border-[#ECECEC]
                            rounded-full
                            px-5
                            py-3
                            shadow-sm
                            mb-8
                        ">

              <Sparkles
                className="text-orange-500"
                size={18}
              />

              <span className="
                                text-[14px]
                                sm:text-[15px]
                                font-medium
                                text-[#4B4B4B]
                            ">
                AI Powered Teacher Workspace
              </span>
            </div>


            {/* TITLE */}

            <h1 className="
                            text-[42px]
                            sm:text-[58px]
                            lg:text-[78px]
                            leading-[52px]
                            sm:leading-[68px]
                            lg:leading-[90px]
                            font-black
                            text-[#1E1E1E]
                            max-w-[800px]
                        ">
              Create Question Papers In Seconds.
            </h1>


            {/* DESCRIPTION */}

            <p className="
                            text-[18px]
                            sm:text-[20px]
                            lg:text-[22px]
                            text-[#6D6D6D]
                            mt-8
                            leading-relaxed
                            max-w-[700px]
                        ">
              VedaAI helps teachers generate professional assignments,
              question papers, answer keys, and downloadable PDFs using AI.
              Save hours of manual work and focus on teaching.
            </p>


            {/* BUTTONS */}

            <div className="
                            flex
                            flex-col
                            sm:flex-row
                            items-start
                            sm:items-center
                            gap-4
                            mt-10
                        ">

              <Link href="/assignments/create">

                <button className="
                                    bg-black
                                    text-white
                                    px-8
                                    py-5
                                    rounded-full
                                    text-lg
                                    font-medium
                                    hover:scale-105
                                    transition-all
                                    shadow-xl
                                    flex
                                    items-center
                                    gap-2
                                ">

                  Create Assignment

                  <ArrowRight size={20} />

                </button>
              </Link>


              <Link href="/assignments">

                <button className="
                                    bg-white
                                    border
                                    border-[#E5E5E5]
                                    text-black
                                    px-8
                                    py-5
                                    rounded-full
                                    text-lg
                                    font-medium
                                    hover:bg-[#F3F3F3]
                                    transition-all
                                ">
                  View Assignments
                </button>
              </Link>
            </div>


            {/* STATS */}

            <div className="
                            flex
                            flex-wrap
                            gap-8
                            sm:gap-12
                            mt-14
                        ">

              <StatItem
                value="10x"
                label="Faster Paper Creation"
              />

              <StatItem
                value="AI"
                label="Smart Question Generation"
              />

              <StatItem
                value="PDF"
                label="Export Ready Format"
              />
            </div>
          </div>


          {/* RIGHT */}

          <div className="relative">

            <div className="
                            absolute
                            -top-8
                            -right-8
                            w-72
                            h-72
                            bg-orange-200
                            rounded-full
                            blur-3xl
                            opacity-40
                        " />

            <div className="
                            bg-white/90
                            backdrop-blur-md
                            rounded-[30px]
                            lg:rounded-[40px]
                            border
                            border-[#ECECEC]
                            shadow-2xl
                            p-5
                            sm:p-8
                            relative
                            z-10
                        ">

              {/* TOP */}

              <div className="
                                flex
                                items-center
                                justify-between
                                mb-8
                            ">

                <div>

                  <h2 className="
                                        text-[24px]
                                        sm:text-[30px]
                                        lg:text-[34px]
                                        font-bold
                                        text-black
                                    ">
                    AI Question Paper
                  </h2>

                  <p className="
                                        text-[#7A7A7A]
                                        mt-2
                                        text-sm
                                        sm:text-base
                                    ">
                    Generated by VedaAI
                  </p>
                </div>

                <div className="
                                    w-14
                                    h-14
                                    sm:w-16
                                    sm:h-16
                                    rounded-2xl
                                    bg-black
                                    flex
                                    items-center
                                    justify-center
                                    text-white
                                ">

                  <Sparkles size={28} />

                </div>
              </div>


              {/* PAPER */}

              <div className="
                                bg-[#FAFAFA]
                                border
                                border-[#ECECEC]
                                rounded-[24px]
                                lg:rounded-[30px]
                                p-5
                                sm:p-8
                            ">

                <div className="
                                    text-center
                                    border-b
                                    border-[#E5E5E5]
                                    pb-6
                                ">

                  <h3 className="
                                        text-2xl
                                        sm:text-3xl
                                        font-bold
                                        text-black
                                    ">
                    Delhi Public School
                  </h3>

                  <p className="
                                        text-[#6F6F6F]
                                        mt-2
                                        text-base
                                        sm:text-lg
                                    ">
                    Subject: Physics
                  </p>
                </div>


                <div className="space-y-5 mt-8">

                  <QuestionItem
                    number="1"
                    text="What is Newton’s Second Law of Motion?"
                  />

                  <QuestionItem
                    number="2"
                    text="Explain the concept of acceleration with examples."
                  />

                  <QuestionItem
                    number="3"
                    text="Define momentum and derive its formula."
                  />
                </div>


                <button className="
                                    w-full
                                    mt-10
                                    bg-black
                                    text-white
                                    py-4
                                    rounded-2xl
                                    text-lg
                                    font-medium
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                ">

                  <Download size={18} />

                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FEATURES */}

      <section className="px-4 sm:px-6 lg:px-10 pb-24">

        <div className="text-center mb-16">

          <h2 className="
                        text-[38px]
                        sm:text-[52px]
                        lg:text-[64px]
                        font-bold
                        text-[#1E1E1E]
                    ">
            Everything Teachers Need.
          </h2>

          <p className="
                        text-[#6E6E6E]
                        text-[18px]
                        sm:text-[20px]
                        lg:text-[22px]
                        mt-5
                        max-w-[850px]
                        mx-auto
                        leading-relaxed
                    ">
            Powerful AI tools designed to simplify assignment creation,
            grading workflows, and paper management.
          </p>
        </div>


        <div className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-8
                ">

          <FeatureCard
            icon={<Brain size={32} />}
            title="AI Generation"
            description="Generate complete question papers instantly using advanced AI models."
          />

          <FeatureCard
            icon={<FileText size={32} />}
            title="Structured Papers"
            description="Beautifully formatted sections, questions, answers, and marks."
          />

          <FeatureCard
            icon={<Download size={32} />}
            title="PDF Export"
            description="Download professional printable PDFs with one click."
          />
        </div>
      </section>


      {/* BENEFITS */}

      <section className="px-4 sm:px-6 lg:px-10 pb-28">

        <div className="
                    bg-black
                    rounded-[30px]
                    lg:rounded-[40px]
                    p-8
                    sm:p-12
                    lg:p-16
                    text-white
                    relative
                    overflow-hidden
                ">

          <div className="
                        absolute
                        top-0
                        right-0
                        w-96
                        h-96
                        bg-orange-500
                        opacity-20
                        blur-3xl
                        rounded-full
                    " />

          <div className="
                        relative
                        z-10
                        grid
                        lg:grid-cols-2
                        gap-16
                        items-center
                    ">

            <div>

              <h2 className="
                                text-[38px]
                                sm:text-[52px]
                                lg:text-[64px]
                                leading-[48px]
                                sm:leading-[60px]
                                lg:leading-[74px]
                                font-bold
                                max-w-[700px]
                            ">
                Built For Modern AI Classrooms.
              </h2>

              <p className="
                                text-[#CFCFCF]
                                text-[18px]
                                sm:text-[20px]
                                lg:text-[22px]
                                mt-8
                                leading-relaxed
                                max-w-[700px]
                            ">
                Reduce repetitive work, save preparation time,
                and create smarter assignments effortlessly.
              </p>
            </div>


            <div className="space-y-7">

              <BenefitItem text="Generate assignments in seconds" />

              <BenefitItem text="Organize papers in dashboard" />

              <BenefitItem text="Download printable PDFs" />

              <BenefitItem text="AI-generated answer keys" />

              <BenefitItem text="Professional modern UI" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {

  return (

    <div className="
            bg-white/90
            backdrop-blur-md
            rounded-[32px]
            border
            border-[#ECECEC]
            p-8
            sm:p-10
            shadow-sm
            hover:-translate-y-2
            transition-all
            duration-300
        ">

      <div className="
                w-16
                h-16
                rounded-2xl
                bg-black
                text-white
                flex
                items-center
                justify-center
                mb-8
            ">
        {icon}
      </div>

      <h3 className="
                text-[28px]
                sm:text-[32px]
                font-bold
                text-black
            ">
        {title}
      </h3>

      <p className="
                text-[#707070]
                text-[17px]
                sm:text-[18px]
                mt-5
                leading-relaxed
            ">
        {description}
      </p>
    </div>
  );
}



function QuestionItem({
  number,
  text,
}: {
  number: string;
  text: string;
}) {

  return (

    <div className="flex gap-4 items-start">

      <div className="
                w-10
                h-10
                rounded-full
                bg-black
                text-white
                flex
                items-center
                justify-center
                font-semibold
                shrink-0
            ">
        {number}
      </div>

      <p className="
                text-[16px]
                sm:text-[18px]
                text-[#2D2D2D]
                leading-relaxed
            ">
        {text}
      </p>
    </div>
  );
}



function BenefitItem({
  text,
}: {
  text: string;
}) {

  return (

    <div className="
            flex
            items-center
            gap-4
            bg-[#1D1D1D]
            border
            border-[#2B2B2B]
            rounded-2xl
            px-5
            sm:px-6
            py-5
        ">

      <CheckCircle2
        size={24}
        className="text-orange-400 shrink-0"
      />

      <span className="
                text-[17px]
                sm:text-[20px]
                text-white
                font-medium
            ">
        {text}
      </span>
    </div>
  );
}



function StatItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {

  return (

    <div>

      <h2 className="
                text-[34px]
                sm:text-[44px]
                font-bold
                text-black
            ">
        {value}
      </h2>

      <p className="
                text-[#777777]
                text-base
                sm:text-lg
                mt-1
            ">
        {label}
      </p>
    </div>
  );
}