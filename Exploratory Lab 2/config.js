var config = {
    style: 'mapbox://styles/leskojosh000/ckmla3qxhn8vl17qs052trjqs',
    accessToken: 'pk.eyJ1IjoibGVza29qb3NoMDAwIiwiYSI6ImNrbHJtajBhdjAyYXkyb3B3azhieHh2cWwifQ.dq8eXoO7STFEo7-JD2xUgQ',
    showMarkers: true,
    markerColor: '#0400ff',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Interactive Thermohaline Circulation Map',
    subtitle: 'Scroll to explore the movement of water through our oceans',
    byline: 'By Joshua Lesko',
    footer: 'Source: S. Rahmstorf, Thermohaline Circulation, Refernces Module in Earth Systems and Environmental Sciences, Elsevier, 2015',
    chapters: [
        {
            id: 'deep-water-formation-GN',
            alignment: 'left',
            hidden: false,
            title: 'Deep Water Formation at the Greenland-Norwegian Sea',
            image: false,
            description: 'Deep water formation takes place in a few localized areas, this is the first. The blue line follows the spreading of deep waters through the North Atlantic and Antarctic. The oragne lines trace the near-surface currents off South Africa and into the Nordic Sea.',
            location: {
                center: [5.361328125, 75.84516854027044],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'deep-water-formation-L',
            alignment: 'right',
            hidden: false,
            title: 'Deep Water Formation at the Labrador Sea',
            image: false,
            description: 'The second localized zone of deep water formation is here.',
            location: {
                center: [-53.4375, 58.768200159239576],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'deep-water-formation-W',
            alignment: 'left',
            hidden: false,
            title: 'Deep Water Formation at Weddel Sea',
            image: false,
            description: 'One of two main zones of deep water accumulation in South Pole.',
            location: {
                center: [-34.541015625, -70.64176873584621],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'deep-water-formation-R',
            alignment: 'right',
            hidden: false,
            title: 'Deep water formation at Ross Sea.',
            image: false,
            description: 'The final main zone of deep water formation into the thermohaline circulation. Here the map zooms out to also visualize areas of upwelling. This process is not as localized as deep water formation and therefore is more difficult to observe, so the orange circles were placed in locations where it is thought to mainly take place.',
            location: {
                center: [-168.75, -75.36450565060706],
                zoom: 0,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
