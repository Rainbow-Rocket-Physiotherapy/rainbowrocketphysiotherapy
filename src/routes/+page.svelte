<script>
    import { fly } from "svelte/transition";
    import Button from '$lib/components/Button.svelte';
    import StarListItem from '$lib/components/StarListItem.svelte';
    import { MailIcon, MapPinIcon, PhoneIcon, SmileIcon, UserIcon } from 'svelte-feather-icons';
    import apcpLogo from '$lib/assets/apcp_logo.webp';
    import cspLogo from '$lib/assets/csp_logo.svg';
    import hcpcLogo from '$lib/assets/hcpc_logo.webp';
    import image1 from '$lib/assets/image1.webp';
    import image2 from '$lib/assets/image2.webp';
    import image3 from '$lib/assets/image3.webp';
    import imageNicky from '$lib/assets/nicky.webp';

    const conditionsCol1 = [
        { text: 'Cerebral Palsy'},
        { text: 'Developmental Delay (e.g. not reaching milestones, late rolling, sitting or walking)'},
        { text: 'Congenital conditions'},
        { text: 'Downs Syndrome'},
        { text: 'Hypoxic Ischemic Encephalopathy (HIE)'},
        { text: 'Torticollis'},
        { text: 'Erbs Palsy – Obsteric Brachial Plexus Lesions'},
        { text: 'Balance and Co-ordination difficulties'},
    ];

    const conditionsCol2 = [
        { text: 'Birth injuries'},
        { text: 'Abnormal gait patterns (i.e tip toe walking, flat feet, asymmetry)'},
        { text: 'Plagiocephaly (Flat head)'},
        { text: 'Joint and muscle pain'},
        { text: 'Hypermobility'},
        { text: 'Musculoskeletal pain'},
        { text: 'Juvenile Idiopathic Arthritis (JIA)'},
        { text: 'Muscle imbalance / weakness'},
    ];

    const getStarClassName = (index) => {
        const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        if (index > colours.length - 1) {
            index = index - colours.length;
        }
        const colour = colours[index];
        return `text-${colour} fill-${colour}`;
    }

    const email = 'Nicky@rainbowrocketphysiotherapy.co.uk';
    const telNo = '07751 683191';
</script>

<section in:fly={{ x: 200, duration: 1000 }} id="welcome">
    <div class="container">
        <div class="border-b pb-8 lg:flex lg:gap-16 lg:items-center">
            <div class="lg:flex-grow">
                <div class="prose lg:prose-md xl:prose-lg">
                    <header class="text-lg border-b">
                        <h3 class="font-deliusSwash">Specialist Physiotherapy for Babies, Children &amp; Young Adults</h3>
                    </header>
                    <div>
                        <p>
                            Rainbow Rocket Physiotherapy is an expert-led service, based in Eastbourne, East Sussex that
                            is easy to access. We specialise in providing high quality physiotherapy services for
                            children of all ages up to young adults. We offer appointments in your own home, where your
                            child can be most relaxed and comfortable.
                        </p>
                        <p>
                            We are passionate about providing expert advice, guidance and treatment to enable children
                            to flourish. Sessions delivered by a highly-trained, knowledgeable Physiotherapist
                            will reassure, motivate, and build confidence in facilitating activities to enable your child
                            to develop.
                        </p>
                        <p>
                            At Rainbow Rocket Physiotherapy we believe that children and young adults should be able to
                            access appointments easily and without a lengthy waiting list.
                        </p>
                    </div>
                    <div class="pb-4">
                        <Button href="#contact" text="CONTACT US TODAY" />
                    </div>
                </div>
            </div>
            <div class="mt-8 text-center lg:flex-shrink lg:mt-0">
                <div class="w-full py-16">
                    <img loading="lazy" alt="" class="drop-shadow-lg mx-auto" src={image1} width="420">
                </div>
            </div>
        </div>
    </div>
</section>
<section in:fly={{ x: -200, duration: 1000 }} id="conditions">
    <div class="container">
        <div class="pb-8 lg:flex lg:gap-16 lg:items-center">
            <div class="hidden mt-8 text-center lg:flex-shrink lg:mt-0 lg:inline-flex">
                <div class="w-full py-16">
                    <img loading="lazy" alt="" class="drop-shadow-lg" src={image2} width="640">
                </div>
            </div>
            <div class="lg:flex-grow">
                <div class="prose max-w-none lg:prose-md xl:prose-lg">
                    <header class="text-lg border-b">
                        <h3 class="font-deliusSwash">Conditions Treated</h3>
                    </header>
                    <div class="grid grid-cols-2 gap-16 py-8 not-prose text-left">
                        <ul>
                            {#each conditionsCol1 as condition, index}
                                <StarListItem text={condition.text} className={getStarClassName(index)} />
                            {/each}
                        </ul>
                        <ul>
                            {#each conditionsCol2 as condition, index}
                                <StarListItem text={condition.text} className={getStarClassName(index)} />
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
                    <p class="text-gray-300">The aim of physiotherapy is not just to help you move, but to help you do it to the
                        best of your ability.</p>
                    <h5 class="text-gray-300 italic">
                        The First Appointment:
                    </h5>
                    <p class="text-gray-300">
                        You will be offered a specialist initial assessment where the physiotherapist will discuss your
                        concerns and provide a physical examination, assessing your abilities. The physiotherapist will
                        look at what you can and cannot do, and note how you did it.
                    </p>
                    <p class="text-gray-300">
                        Whilst this may not be the most exciting of sessions, it is important to ensure that we know how
                        to tailor your sessions. We will strive to make this a positive experience, catered around your
                        needs and aspirations.
                    </p>
                    <p class="text-gray-300">
                        At Rainbow Rocket Physiotherapy, we believe in keeping the young person at the centre, with
                        families, carers and professionals working together to achieve a seamless integrated approach.
                    </p>
                    <h5 class="text-gray-300 italic">
                        Physiotherapy treatments may include (but are not limited to)
                    </h5>
                    <ul class="text-gray-300">
                        <li>Exercises</li>
                        <li>Games</li>
                        <li>Activities to carry out at home</li>
                        <li>Postural Education</li>
                        <li>Mobilisation activities</li>
                        <li>Use of equipment (e.g. gym ball/walker)</li>
                        <li>Hydrotherapy</li>
                        <li>Advice around taping</li>
                    </ul>
                    <p class="text-gray-300">
                        We understand that children learn through play, movement and exploration and you will find that
                        our sessions centre around these principles to encourage enjoyment while working on a specific
                        task.
                    </p>
                    <p class="text-gray-300">
                        We understand that young adults may prefer for sessions to be carried out at a gym, in a
                        swimming pool, or inside a leisure centre which can be arranged if preferred.
                    </p>
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
            <div class="prose lg:prose-md xl:prose-lg mx-auto max-w-none">
                <header class="text-lg border-b">
                    <h3 class="font-deliusSwash text-center">Why Rainbow Rocket Physiotherapy?</h3>
                </header>
                <p class="max-w-3xl mx-auto">
                    Rainbow Rocket Physiotherapy was formed as Nicky wanted to be able to provide a service for families
                    who felt that they would benefit from additional professional guidance when supporting their
                    children to progress. The NHS is a wonderful service that all can access but extra support for young
                    people can be pivotal in aiding them to reach their full potential. This is where Rainbow Rocket
                    Physiotherapy can help. We work alongside and in conjunction with NHS provisions to ensure a holistic and combined approach to treatment.
                </p>
                <div class="max-w-3xl grid grid-cols-1 gap-8 lg:gap-16 py-8 not-prose">
                    <div class="flex flex-row items-center gap-4">
                        <div><UserIcon class="text-blue fill-white" size="28" /></div>
                        <p>
                            Highly trained Chartered Physiotherapist with extensive experience in treating babies, children and young adults.
                        </p>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <div><SmileIcon class="text-blue fill-white" size="28" /></div>
                        <p>
                            Sessions are designed to be fun and engaging while working towards a common goal with a professional and reliable therapist.
                        </p>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <div><MapPinIcon class="text-blue fill-white" size="28" /></div>
                        <p>
                            Physiotherapy services provided in the comfort of your own home at no extra cost - no need to travel for appointments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section>
<section in:fly={{ x: 200, duration: 1000 }} id="about">
    <div class="container">
        <div class="border-b pb-8 lg:flex lg:gap-16 lg:items-center">
            <div class="lg:flex-grow">
                <div class="prose lg:prose-md xl:prose-lg mx-auto">
                    <header class="text-lg border-b">
                        <h3 class="font-deliusSwash">About Me</h3>
                    </header>
                    <div>
                        <p>Hi, I’m Nicky and I am the clinical director of Rainbow Rocket Physiotherapy.</p>
                        <p>
                            <img loading="lazy" alt="" class="drop-shadow-lg float-right p-8 prose-figure" src={imageNicky} width="320">
                            Since graduating from Coventry University in 2006, I have honed my skills as a highly
                            specialised physiotherapist, working with babies, children and young adults in a variety of
                            NHS and private settings. I have worked in community paediatric therapy services, homes, schools, and sports teams.
                            I work part-time at the prestigious Chailey Clinical Services as a highly specialised paediatric
                            and young adult physiotherapist. I work alongside Occupational Therapists, Speech and
                            Language Therapists, Paediatricians, Dietitians, Rehabilitation Engineers, Clinical Scientists
                            and many more.
                        </p>
                        <p>
                            I have a passion for providing the best quality care possible while disguising this as a fun
                            activity to ensure compliance. I believe that with a good understanding of child development
                            and with extensive experience of conditions and injuries specific to childhood, I am able to
                            formulate treatments that are both effective and fun.
                        </p>
                        <p>
                            I am friendly and approachable and I strive to work holistically to ensure that any treatment
                            plan is individualised, working with families to ensure goals set are realistic, relevant
                            and achievable.
                        </p>
                        <blockquote class="prose-blockquote">
                            "Our vision at Rainbow Rocket Physiotherapy is to enable children and young adults to reach their potential (and even exceed it) no matter what their challenges may be. We strive to ensure that we work together with families to enable parents to feel knowledgeable and confident in helping their child to succeed. Our goal is to optimise function and quality of life for all the young people that we work with."
                        </blockquote>
                        <p>
                            <span class="font-bold">Nicky Nock,</span><br>
                            <span class="italic text-sm">
                            Clinical Director and Highly Specialised Paediatric and Young Adult Physiotherapist BSc (Hons) HCPC MCSP MAPCP
                        </span>
                        </p>
                    </div>
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
                                <th>Service</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Initial Assessment with written summary provided</td>
                                <td>&pound;130</td>
                            </tr>
                            <tr>
                                <td>Follow up appointment </td>
                                <td>&pound;100</td>
                            </tr>
                            <tr>
                                <td>Hydrotherapy</td>
                                <td>Price On Application</td>
                            </tr>
                            <tr>
                                <td>Intensive courses</td>
                                <td>Price On Application</td>
                            </tr>
                            <tr>
                                <td>Training/Teaching session</td>
                                <td>Price On Application</td>
                            </tr>
                            <tr>
                                <td>Attending meetings/assessments</td>
                                <td>&pound;90 per hour</td>
                            </tr>
                            <tr>
                                <td>Reports</td>
                                <td>&pound;90 per hour</td>
                            </tr>
                            </tbody>
                        </table>
                        <p class="text-xs">
                            Rainbow Rocket Physiotherapy will invoice you following your session. This may be agreed on
                            a session, weekly, or monthly basis. You can choose to pay at the end of your session or
                            within 14 days of receipt of your invoice. Invoices will be sent via e-mail (unless post is
                            specified). BACS payment is preferable, but if this is not possible, please discuss with the
                            physiotherapist and an alternative method agreed.
                        </p>
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
                    <p>If you need information about treatments or want to schedule an appointment, just give me a call.
                        If I can't pick up, leave a voicemail, and I'll get back to you ASAP. You can also send me an
                        email if that's more convenient. I'm here to help!</p>
                    <div class="text-center max-w-full mx-auto mt-16 flex flex-wrap gap-8 md:flex md:justify-evenly md:gap-16">
                        <div class="flex gap-2 md:gap-4 items-center">
                            <MailIcon class="text-blue fill-white" size="24" /> <a class="text-indigo text-xl hover:text-violet no-underline" href="mailto:{email}">{email}</a>
                        </div>

                        <div class="flex gap-2 md:gap-4 items-center">
                            <PhoneIcon class="text-blue fill-white" size="24" /> <span class="text-indigo text-xl">{telNo}</span>
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
                <div>
                    <img alt="Association of Paediatric Chartered Physiotherapists Logo"
                         title="Association of Paediatric Chartered Physiotherapists"
                         src={apcpLogo}
                         height="144"
                         width="144"
                         class="mx-auto"
                    />
                </div>
                <div>
                    <img alt="Association of Paediatric Chartered Physiotherapists Logo"
                         title="Association of Paediatric Chartered Physiotherapists"
                         src={hcpcLogo}
                         height="216"
                         width="216"
                         class="mx-auto"
                    />
                </div>
                <div>
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
