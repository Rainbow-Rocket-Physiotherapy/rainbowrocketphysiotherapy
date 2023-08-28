<script>
    import Button from '$lib/components/Button.svelte';
    import StarListItem from '$lib/components/StarListItem.svelte';
    import { HomeIcon, MailIcon, PhoneIcon } from 'svelte-feather-icons';
    import apcpLogo from '$lib/assets/apcp_logo.jpg';
    import cspLogo from '$lib/assets/csp_logo.svg';
    import hcpcLogo from '$lib/assets/hcpc_logo.webp';
    import image1 from '$lib/assets/image1.png';
    import image2 from '$lib/assets/image2.png';
    import image3 from '$lib/assets/image3.png';

    const conditionsCol1 = [
        { text: 'Developmental Delay (e.g. not reaching milestones, late rolling, sitting or walking)', className: 'text-red fill-red' },
        { text: 'Erbs Palsy – Obsteric Brachial Plexus Lesions', className: 'text-orange fill-orange' },
        { text: 'Plagiocephaly (Flat head)', className: 'text-yellow fill-yellow' },
        { text: 'Torticollis', className: 'text-green fill-green' },
        { text: 'Congenital conditions', className: 'text-blue fill-blue' },
        { text: 'Birth injuries', className: 'text-indigo fill-indigo' },
        { text: 'Hypoxic Ischemic Encephalopathy (HIE)', className: 'text-violet fill-violet' },
    ];

    const conditionsCol2 = [
        { text: 'Cerebral Palsy', className: 'text-red fill-red' },
        { text: 'Downs Syndrome', className: 'text-orange fill-orange' },
        { text: 'Hypermobility', className: 'text-yellow fill-yellow' },
        { text: 'Abnormal gait patterns (i.e tip toe walking, flat feet, asymmetry)', className: 'text-green fill-green' },
        { text: 'Joint and muscle pain', className: 'text-blue fill-blue' },
        { text: 'Musculoskeletal pain', className: 'text-indigo fill-indigo' },
        { text: 'Juvenile Idiopathic Arthritis (JIA)', className: 'text-violet fill-violet'},
        { text: 'Muscle imbalance / weakness', className: 'text-red fill-red' },
        { text: 'Balance and Co-ordination difficulties', className: 'text-orange fill-orange' }
    ];
</script>

<section id="about">
    <div class="container">
        <div class="border-b pb-8 lg:flex lg:gap-16 lg:items-center">
            <div class="lg:flex-grow">
                <div class="prose lg:prose-md xl:prose-lg">
                    <header class="text-lg border-b">
                        <h3>Specialist Physio for babies, children &amp; teens</h3>
                    </header>
                    <div>
                        <p>
                            The Children's Physio is an easily accessible, expert service that specialises in
                            delivering physiotherapy to children of all ages. We offer appointments in the comfort
                            of your home, across Central and Greater London, Surrey, Essex, Dorset and Cornwall.
                        </p>
                        <p>
                            We're passionate about providing expert physio treatment for babies and children. Our
                            professional approach is reassuring, motivating and confidence-building. All our
                            therapists are highly trained in paediatrics and have extensive experience working
                            with children to deliver expert treatment whilst making it fun for parent and child!
                        </p>
                        <p>
                            Here at The Children's Physio we believe that children should have access to
                            individualised, specialist paediatric physiotherapy without the hassle and stress of
                            hospital visits and long waiting lists.
                        </p>
                    </div>
                    <div class="pb-4">
                        <Button href="#contact" text="CONTACT US TODAY" />
                    </div>
                </div>
            </div>
            <div class="mt-8 text-center lg:flex-shrink lg:mt-0">
                <div class="w-full py-16"><img class="drop-shadow-lg" src={image1} width="640"></div>
            </div>
        </div>
    </div>
</section>
<section id="conditions">
    <div class="container">
        <div class="pb-8 lg:flex lg:gap-16 lg:items-center">
            <div class="hidden mt-8 text-center lg:flex-shrink lg:mt-0 lg:inline-flex">
                <div class="w-full py-16"><img class="drop-shadow-lg" src={image2} width="640"></div>
            </div>
            <div class="lg:flex-grow">
                <div class="prose lg:prose-md xl:prose-lg">
                    <header class="text-lg border-b">
                        <h3>Conditions Treated</h3>
                    </header>
                    <div class="grid grid-cols-2 gap-8 py-8 not-prose text-left">
                        <ul>
                            {#each conditionsCol1 as condition}
                                <StarListItem text={condition.text} className={condition.className} />
                            {/each}
                        </ul>
                        <ul>
                            {#each conditionsCol2 as condition}
                                <StarListItem text={condition.text} className={condition.className} />
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="treatment">
    <div class="pt-4 pb-8 bg-indigo text-white textured-bg">
        <div class="container">
            <div class="prose lg:prose-md xl:prose-lg mx-auto">
                <header class="text-lg border-b">
                    <h3 class="text-gray-300">Treatment</h3>
                </header>
                <div class="pt-8 text-gray-300">
                    <h5>What does treatment involve?</h5>
                    <p>
                        Physiotherapy can help you achieve optimum physical and mental development. The aim is not
                        just to help you move, but to move to the best of your ability.
                    </p>
                    <h5>The first appointment:</h5>
                    <p>
                        Initially you will be offered a preliminary assessment by our of our specialists in a
                        friendly and relaxed atmosphere. You may choose this to be your own home, school, college,
                        clinic or other.
                    </p>
                    <p>
                        At this appointment there will be a discussion regarding your concerns, a physical
                        observation and assessment of your abilities. We will not only be looking at what you can
                        and cannot do, but how you do it. Our physiotherapists are trained in observation of the
                        quality and ease of movement and the willingness to attempt activities.
                    </p>
                    <p>
                        We strive to make the assessment a relaxed and positive experience centred around your
                        needs, priorities and aims.
                    </p>
                    <p>
                        Once the main problems are identified we will discuss how we can help, what we can offer,
                        how often treatment needs to be, the progress we would expect to make and other relevant
                        issues.
                    </p>
                    <p>
                        Short and long term goals will be set in discussion with you, your family and suppport
                        team. These goals will be realistic for everyone and will be reviewed on a regular basis.
                    </p>
                    <p>
                        At Physio4kids &amp; Young Adults we believe you, your family and your wider team are an
                        integral part of your rehabilitation journey and we strive to work in partnership to best
                        facilitate your physical progress.
                    </p>
                    <h5>Physiotherapy treatment may include the following...</h5>
                    <ul>
                        <li>Exercises</li>
                        <li>Personalised gym programs</li>
                        <li>Games</li>
                        <li>Education of postures and movement</li>
                        <li>Mobilisation and stretching</li>
                        <li>Activities to carry out at home</li>
                        <li>Use of equipment (e.g.) gym ball</li>
                        <li>Hydrotherapy and water based activities</li>
                        <li>We are willing to advise regarding horse-riding and rebound therapy</li>
                    </ul>

                    <div class="text-center py-4">
                        <Button href="#" variant="white" text="CONTACT US TODAY" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="why">
    <div class="container">
        <div class="border-b pb-8 lg:flex lg:gap-16 lg:items-center">
            <div class="prose lg:prose-md xl:prose-lg mx-auto">
                <header class="text-lg border-b">
                    <h3 class="text-center">Why choose Rainbow Rocket Physiotherapy?</h3>
                </header>
                <div class="grid grid-cols-2 gap-8 py-8 not-prose">
                    <div class="flex flex-row gap-4">
                        <div class=""><HomeIcon size="24" /></div>
                        <p>
                            Home visits
                        </p>
                    </div>
                    <div class="flex flex-row gap-4">
                        <div class="">icon</div>
                        <p>
                            Available at short notice and convenient times, including evenings, weekends &
                            emergencies.
                        </p>
                    </div>
                    <div class="flex flex-row gap-4">
                        <div class="">icon</div>
                        <p>
                            Highly trained, experienced chartered physiotherapists specialising in children &amp;
                            babies.
                        </p>
                    </div>
                    <div class="flex flex-row gap-4">
                        <div class="">icon</div>
                        <p>
                            Available at short notice and convenient times, including evenings, weekends &
                            emergencies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section>
<section id="fees">
    <div class="container">
        <div class="border-b pb-8 lg:flex lg:gap-16 lg:items-center">
            <div class="lg:flex-grow">
                <div class="prose lg:prose-md xl:prose-lg">
                    <header class="text-lg border-b">
                        <h3>Fees</h3>
                    </header>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Service</th><th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>abc</td><td>&pound;50</td>
                            </tr>
                            <tr>
                                <td>def</td><td>&pound;50</td>
                            </tr>
                            <tr>
                                <td>ghi</td><td>&pound;50</td>
                            </tr>
                            <tr>
                                <td>jkl</td><td>&pound;50</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="pb-4">
                        <Button href="#contact" text="CONTACT US TODAY" />
                    </div>
                </div>
            </div>
            <div class="mt-8 text-center lg:flex-shrink lg:mt-0">
                <div class="w-full py-16"><img class="drop-shadow-lg" src={image3} width="640"></div>
            </div>
        </div>
    </div>
</section>
<section id="contact">
    <div class="py-8">
        <div class="container">
            <div class="prose lg:prose-md xl:prose-lg md:text-center mx-auto">
                <header class="text-lg border-b">
                    <h3>Contact Us</h3>
                </header>
                <div class="pt-8">
                    <p>For information on treatments or to book an appointment, please call me and leave a voicemail if I can't answer. I'll call you back as soon as possible. Or alternatively, email me instead.</p>
                    <div class="text-center max-w-full mx-auto md:flex md:justify-evenly md:gap-16">
                        <div class="block">
                            <div class="flex gap-4">
                                <MailIcon size="24" /> <a href="mailto:nicky@rainbowrocketphysiotherapy.co.uk">nicky@rainbowrocketphysiotherapy.co.uk</a>
                            </div>
                        </div>
                        <div class="block">
                            <div class="flex gap-4">
                                <PhoneIcon size="24" /> 07751 683191
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="py-8">
        <div class="container pt-8 pb-16 border-b">
            <div class="grid grid-cols-3 items-center content-center">
                <div class="">
                    <img alt="Association of Paediatric Chartered Physiotherapists Logo"
                         title="Association of Paediatric Chartered Physiotherapists"
                         src={apcpLogo}
                         height="144"
                         width="144"
                         class="mx-auto"
                    />
                </div>
                <div class="">
                    <img alt="Association of Paediatric Chartered Physiotherapists Logo"
                         title="Association of Paediatric Chartered Physiotherapists"
                         src={hcpcLogo}
                         height="144"
                         width="144"
                         class="mx-auto"
                    />
                </div>
                <div class="">
                    <img alt="Association of Paediatric Chartered Physiotherapists Logo"
                         title="Association of Paediatric Chartered Physiotherapists"
                         src={cspLogo}
                         height="144"
                         width="144"
                         class="mx-auto"
                    />
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .textured-bg {
        background-image: repeating-linear-gradient(48deg, rgba(0,0,0, 0.2), rgba(0,0,0, 0.2) 1px, transparent 0px, transparent 1px);
        background-size: 24px;
    }
</style>
