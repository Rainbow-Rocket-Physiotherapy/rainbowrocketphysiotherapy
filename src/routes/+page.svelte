<script>
    import { fly } from "svelte/transition";
    import Button from '$lib/components/Button.svelte';
    import StarListItem from '$lib/components/StarListItem.svelte';
    import { HomeIcon, MailIcon, PhoneIcon } from 'svelte-feather-icons';
    import apcpLogo from '$lib/assets/apcp_logo.webp';
    import cspLogo from '$lib/assets/csp_logo.svg';
    import hcpcLogo from '$lib/assets/hcpc_logo.webp';
    import image1 from '$lib/assets/image1.webp';
    import image2 from '$lib/assets/image2.webp';
    import image3 from '$lib/assets/image3.webp';

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

<section in:fly={{ x: 200, duration: 1000 }} id="about">
    <div class="container">
        <div class="border-b pb-8 lg:flex lg:gap-16 lg:items-center">
            <div class="lg:flex-grow">
                <div class="prose lg:prose-md xl:prose-lg">
                    <header class="text-lg border-b">
                        <h3 class="font-deliusSwash">Specialist Physio for babies, children &amp; teens</h3>
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
                <div class="w-full py-16"><img loading="lazy" alt="" class="drop-shadow-lg" src={image1} width="640"></div>
            </div>
        </div>
    </div>
</section>
<section in:fly={{ x: -200, duration: 1000 }} id="conditions">
    <div class="container">
        <div class="pb-8 lg:flex lg:gap-16 lg:items-center">
            <div class="hidden mt-8 text-center lg:flex-shrink lg:mt-0 lg:inline-flex">
                <div class="w-full py-16"><img loading="lazy" alt="" class="drop-shadow-lg" src={image2} width="640"></div>
            </div>
            <div class="lg:flex-grow">
                <div class="prose lg:prose-md xl:prose-lg">
                    <header class="text-lg border-b">
                        <h3 class="font-deliusSwash">Conditions Treated</h3>
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
<section in:fly={{ x: 200, duration: 1000 }} id="treatment">
    <div class="pt-4 pb-8 bg-indigo text-white textured-bg">
        <div class="container">
            <div class="prose lg:prose-md xl:prose-lg mx-auto">
                <header class="text-lg border-b">
                    <h3 class="font-deliusSwash text-gray-300">Treatment</h3>
                </header>
                <div class="pt-8">
                    <h5 class="text-gray-300">What does treatment involve?</h5>
                    <p class="text-gray-300">
                        Physiotherapy can help you achieve optimum physical and mental development. The aim is not
                        just to help you move, but to move to the best of your ability.
                    </p>
                    <h5 class="text-gray-300">The first appointment:</h5>
                    <p class="text-gray-300">
                        Initially you will be offered a preliminary assessment by our of our specialists in a
                        friendly and relaxed atmosphere. You may choose this to be your own home, school, college,
                        clinic or other.
                    </p>
                    <p class="text-gray-300">
                        At this appointment there will be a discussion regarding your concerns, a physical
                        observation and assessment of your abilities. We will not only be looking at what you can
                        and cannot do, but how you do it. Our physiotherapists are trained in observation of the
                        quality and ease of movement and the willingness to attempt activities.
                    </p>
                    <p class="text-gray-300">
                        We strive to make the assessment a relaxed and positive experience centred around your
                        needs, priorities and aims.
                    </p>
                    <p class="text-gray-300">
                        Once the main problems are identified we will discuss how we can help, what we can offer,
                        how often treatment needs to be, the progress we would expect to make and other relevant
                        issues.
                    </p>
                    <p class="text-gray-300">
                        Short and long term goals will be set in discussion with you, your family and suppport
                        team. These goals will be realistic for everyone and will be reviewed on a regular basis.
                    </p>
                    <p class="text-gray-300">
                        At Physio4kids &amp; Young Adults we believe you, your family and your wider team are an
                        integral part of your rehabilitation journey and we strive to work in partnership to best
                        facilitate your physical progress.
                    </p>
                    <h5 class="text-gray-300">Physiotherapy treatment may include the following...</h5>
                    <ul class="text-gray-300">
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
                    <h3 class="font-deliusSwash text-center">Why choose Rainbow Rocket Physiotherapy?</h3>
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
                        <h3 class="font-deliusSwash">Fees</h3>
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
                <div class="w-full py-16"><img loading="lazy" alt="" class="drop-shadow-lg" src={image3} width="640"></div>
            </div>
        </div>
    </div>
</section>
<section id="contact">
    <div class="py-8">
        <div class="container">
            <div class="prose lg:prose-md xl:prose-lg md:text-center mx-auto">
                <header class="text-lg border-b">
                    <h3 class="font-deliusSwash">Contact Us</h3>
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
        background-color: #007186;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23007186'/%3E%3Cstop offset='1' stop-color='%235533A1'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.05'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
    }
</style>
