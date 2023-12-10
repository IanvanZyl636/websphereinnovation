import NavMenu from "@/app/components/menu/nav-menu";
import Background from "@/app/components/background/background";
import PageContainer from "@/app/components/page/page-container";
import SectionWrapper, {SectionWrapperProps} from "@/app/components/section/section-wrapper";
import earth from "@/public/earth.webp";
import Image from "next/image";
import {Rocket} from "@/app/components/rocket/rocket";
import {GridItem} from "@/app/components/grid/grid-item";
import {Grid} from "@/app/components/grid/grid";
import qualityAssurance from "@/public/quality-assurance.jpg";
import dedicatedTeam from "@/public/dedicated_team.jpg";
import domainExpert from "@/public/domain_expert.jpg";
import longTermCooperation from "@/public/long-term-cooperation.jpg";
import webDevelopment from "@/public/web-development.jpg";
import businessAnalytics from "@/public/business-analytics.jpg";
import consultant from "@/public/consultant.png";
import {carouselProps} from "@/app/components/carousel/infinite-carousel";
import {ContactUsForm} from "@/app/components/contact-us-form/contact-us-form";

export default function Home() {
    const carouselProps: carouselProps = {
        items: [{
            node: (<GridItem>
                    <div className={'relative w-full'} style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                        <Image src={webDevelopment} alt={'web-development'} fill
                               style={{
                                   objectPosition: 'center',
                                   objectFit: 'cover'
                               }}></Image>
                    </div>
                    <h3 className={'grid-item-h3'}>
                        Web Development
                    </h3>
                    <p className={'text-3rd-color'}>
                        Elevate your online presence with our expert web development services. We specialize
                        in custom designs, responsive development, e-commerce solutions, and user-friendly
                        content management systems. Our experienced team ensures fast, secure, and
                        innovative websites, collaborating closely with clients to bring their digital
                        vision to life. Future-proof your online experience with us.
                    </p>
                </GridItem>
            )
        },
            {
                node: (<GridItem>
                        <div className={'relative w-full'} style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                            <Image src={businessAnalytics} alt={'business-analytics'} fill
                                   style={{
                                       objectPosition: 'center',
                                       objectFit: 'cover'
                                   }}></Image>
                        </div>
                        <h3 className={'grid-item-h3'}>
                            Business Suite Setup
                        </h3>
                        <p className={'text-3rd-color'}>
                            Elevate your business with our tailored Business Suite Setup—designed for seamless
                            communication, efficient project management, and robust data security. Our suite,
                            scalable for businesses of all sizes, integrates with your existing tech stack.
                            Benefit from personalized solutions and expert support to optimize operations.
                            Contact us to embark on the path to streamlined and secure business processes.
                        </p>
                    </GridItem>
                )
            },
            {
                node: (<GridItem>
                    <div className={'relative w-full'} style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                        <Image src={consultant} alt={'consultant'} fill
                               style={{
                                   objectPosition: 'center',
                                   objectFit: 'cover'
                               }}></Image>
                    </div>
                    <h3 className={'grid-item-h3'}>Software Consulting</h3>
                    <p className={'text-3rd-color'}>
                        Elevate your projects with our Software Consultancy Services at Websphere
                        Innovations. Our experienced team provides expert guidance throughout the software
                        development lifecycle, ensuring success from concept to implementation. Trust us to
                        navigate the complexities of software development and deliver tailored solutions for
                        your unique needs.
                    </p>
                </GridItem>)
            }
        ]
    }

    const sections: SectionWrapperProps[] = [
        {
            children: (
                <div className={'flex-grow flex flex-row w-full h-full'} style={{paddingBottom: '15%'}}>
                    <div className={'flex flex-col h-full w-2/3 justify-center'}>
                        <h1 className={'landing-page-h1'}><span>Boost Your Startup</span><br/><span
                            className={'font-normal'}>Website, Security and DevOps Done
                            Right</span></h1>
                    </div>
                    <div className={'flex flex-col justify-center h-full w-1/3'}>
                        <div className={'h-2/3 w-full'}>
                            <Rocket/>
                        </div>
                    </div>
                </div>
            ), sectionType: 'transparent'
        },
        {
            children: (
                <>
                    <div className={'h-full flex flex-col justify-center align-middle'}>
                        <div>
                            <Grid gridCols={'lg:grid-cols-3'}>
                                <GridItem>
                                    <div className={'relative w-full'} style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                                        <Image src={webDevelopment} alt={'web-development'} fill
                                               style={{
                                                   objectPosition: 'center',
                                                   objectFit: 'cover'
                                               }}></Image>
                                    </div>
                                    <h3 className={'grid-item-h3'}>
                                        Web Development
                                    </h3>
                                    <p className={'text-3rd-color'}>
                                        Elevate your online presence with our expert web development services. We specialize
                                        in custom designs, responsive development, e-commerce solutions, and user-friendly
                                        content management systems. Our experienced team ensures fast, secure, and
                                        innovative websites, collaborating closely with clients to bring their digital
                                        vision to life. Future-proof your online experience with us.
                                    </p>
                                </GridItem>
                                <GridItem>
                                    <div className={'relative w-full'} style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                                        <Image src={businessAnalytics} alt={'business-analytics'} fill
                                               style={{
                                                   objectPosition: 'center',
                                                   objectFit: 'cover'
                                               }}></Image>
                                    </div>
                                    <h3 className={'grid-item-h3'}>
                                        Business Suite Setup
                                    </h3>
                                    <p className={'text-3rd-color'}>
                                        Elevate your business with our tailored Business Suite Setup—designed for seamless
                                        communication, efficient project management, and robust data security. Our suite,
                                        scalable for businesses of all sizes, integrates with your existing tech stack.
                                        Benefit from personalized solutions and expert support to optimize operations.
                                        Contact us to embark on the path to streamlined and secure business processes.
                                    </p>
                                </GridItem>
                                <GridItem>
                                    <div className={'relative w-full'} style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                                        <Image src={consultant} alt={'consultant'} fill
                                               style={{
                                                   objectPosition: 'center',
                                                   objectFit: 'cover'
                                               }}></Image>
                                    </div>
                                    <h3 className={'grid-item-h3'}>Software Consulting</h3>
                                    <p className={'text-3rd-color'}>
                                        Elevate your projects with our Software Consultancy Services at Websphere
                                        Innovations. Our experienced team provides expert guidance throughout the software
                                        development lifecycle, ensuring success from concept to implementation. Trust us to
                                        navigate the complexities of software development and deliver tailored solutions for
                                        your unique needs.
                                    </p>
                                </GridItem>
                            </Grid>
                        </div>
                    </div>
                </>
            ), sectionType: 'fill', position: 'bottom'
        },
        // {
        //     children: (
        //         <>
        //             <div className={'flex flex-col h-full'}>
        //                 <h2 className={'landing-page-h2 mt-10 mb-10'}>What We <span>Offer</span></h2>
        //                         <InfiniteCarousel items={carouselProps.items}/>
        //             </div>
        //         </>
        //     ), sectionType: 'fill', position: 'bottom'
        // },
        {
            children: (<>
                <div className={'flex lg:flex-row flex-col-reverse h-full'}>
                    <div className={'relative lg:w-1/2 flex lg:flex-col flex-row justify-center align-middle lg:pr-8'}>
                        <div className={'w-1/2 lg:w-full mt-8 lg:mt-0'}>
                            <Image src={earth} alt={'earth'}
                                   style={{height: 'auto', width: '100%', objectFit: "contain"}}></Image>
                        </div>
                    </div>
                    <div className={'lg:w-1/2 flex flex-col justify-center align-middle lg:pl-8'}>
                        <h2 className={'landing-page-h2 mb-10'}>About <span>Us</span></h2>
                        <p className={'text-3rd-color'} style={{textAlign: 'left', fontSize: '1.7rem'}}>
                            <b>Websphere Innovations</b> wants to empower businesses through cutting-edge digital
                            solutions, we boast a dynamic team of passionate developers. Our expertise ranges from
                            crafting immersive web experiences to streamlining operations through tailored business
                            suite setups. As strategic consultants, we go beyond recommending software, ensuring our
                            solutions align with your unique goals. Choose Websphere for innovative, client-centric
                            approaches, continuous learning, and a commitment to reliability and trust in driving your
                            digital success.
                        </p>
                    </div>
                </div>
            </>), sectionType: 'transparent'
        },
        {
            children: (
                <>
                    <div className={'h-full flex flex-col justify-center align-middle'}>
                        <div>
                            <Grid gridCols={'lg:grid-cols-4'}>
                                <GridItem>
                                    <div className={'relative w-full'}
                                         style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                                        <Image src={longTermCooperation}
                                               alt={'long term cooperation'}
                                               fill
                                               style={{
                                                   objectPosition: 'center',
                                                   objectFit: 'cover'
                                               }}></Image>
                                    </div>
                                    <h3 className={'grid-item-h3'}>
                                        Long-term cooperation
                                    </h3>
                                    <p className={'text-3rd-color'}>
                                        A long-term outlook fosters a deep understanding of your unique needs and goals,
                                        enabling us to consistently deliver tailored solutions that evolve with your
                                        business and ensure sustained success.
                                    </p>
                                </GridItem>
                                <GridItem>
                                    <div className={'relative w-full'}
                                         style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                                        <Image src={domainExpert}
                                               alt={'domain expert'}
                                               fill
                                               style={{
                                                   objectPosition: 'center',
                                                   objectFit: 'cover'
                                               }}></Image>
                                    </div>
                                    <h3 className={'grid-item-h3'}>
                                        Domain Experise
                                    </h3>
                                    <p className={'text-3rd-color'}>
                                        Design and implement solutions that are not just technically proficient but also
                                        aligned with the specific challenges and opportunities within your field.
                                    </p>
                                </GridItem>
                                <GridItem>
                                    <div className={'relative w-full'}
                                         style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                                        <Image src={dedicatedTeam}
                                               alt={'dedicated team'}
                                               fill
                                               style={{
                                                   objectPosition: 'center',
                                                   objectFit: 'cover'
                                               }}></Image>
                                    </div>
                                    <h3 className={'grid-item-h3'}>Dedicated Team</h3>
                                    <p className={'text-3rd-color'}>
                                        Your team will possess the essential skills required for developing
                                        industry-specific software. Whether it&apos;s a basic mobile app or a large-scale
                                        enterprise solution, we have the team you need.
                                    </p>
                                </GridItem>
                                <GridItem>
                                    <div className={'relative w-full'}
                                         style={{aspectRatio: "2 / 1.5", overflow: 'hidden'}}>
                                        <Image src={qualityAssurance}
                                               alt={'quality assurance'}
                                               fill
                                               style={{
                                                   objectPosition: 'center',
                                                   objectFit: 'cover'
                                               }}></Image>
                                    </div>
                                    <h3 className={'grid-item-h3'}>Quality Assurance</h3>
                                    <p className={'text-3rd-color'}>
                                        Quality assurance services extend to every aspect of the software. Our goal is
                                        to guarantee seamless performance and the successful execution of your project.
                                    </p>
                                </GridItem>
                            </Grid>
                        </div>
                    </div>
                </>
            ), sectionType: 'fill', position: 'horizontal'
        },
        {
            children: (<>
                <div>
                    <ContactUsForm></ContactUsForm>
                </div>
            </>), sectionType: 'transparent'
        },
        {children: (<></>), sectionType: 'fill', position: 'top'},
    ];

    return (
        <>
            <NavMenu></NavMenu>
            <div className={"relative h-full w-full"}>
                <Background></Background>
                <PageContainer>
                    {sections.map((section, i) => {
                        const sectionIdentifier = `section${i}`;

                        return (<SectionWrapper
                            key={sectionIdentifier}
                            id={sectionIdentifier}
                            {...section}/>)
                    })}
                </PageContainer>
            </div>
        </>
    )
}