var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#000",//F0E1BA
    background_transparent: "no",
    border_color: "#fff",
    state_description: "",
    state_color: "#579BD3",
    state_hover_color: "#3394e7",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "red",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: "40",
    location_type: "marker",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "White",
    label_hover_color: "#d5ddec",
    label_size: "35",
    label_font: "ABeeZee",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    ALB1494: {
      name: "Durrës"
    },
    ALB1495: {
      name: "Fier"
    },
    ALB1498: {
      name: "Shkodër"
    },
    ALB1502: {
      name: "Kukës"
    },
    ALB1504: {
      name: "Vlorë"
    },
    ALB1521: {
      name: "Korçë"
    },
    ALB1523: {
      name: "Berat"
    },
    ALB1524: {
      name: "Elbasan"
    },
    ALB1525: {
      name: "Gjirokastër"
    },
    ALB1526: {
      name: "Dibër"
    },
    ALB1528: {
      name: "Lezhë",
      description: "The land of Xhensil"
    },
    ALB1529: {
      name: "Tirana",
      image_position: "center"
    }
  },
  locations: {
    "0": {
      lat: 39.874,
      lng: 20.001,
      name: "Sarande",
      description: "<img src=\"https://lp-cms-production.imgix.net/2019-06/532063479_full.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "1": {
      lat: 40.233,
      lng: 20.354,
      name: "Permet",
      description: "<img src=\"https://nrgmotors.al/wp-content/uploads/2022/06/51026338_347774642495450_5090277527050518528_n-1-e1654797913372.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "2": {
      lat: 42.452,
      lng: 19.89,
      name: "Valbone",
      description: "<img src=\"https://alpventurer.com/wp-content/uploads/2015/11/Valbone-Valley-National-Park-22.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "3": {
      lat: 40.103,
      lng: 19.744,
      name: "Himare",
      description: "<img src=\"https://files.elfsightcdn.com/6cc7382d-e474-40af-a392-a57a5c25cfb4/69ccedfb-dcd0-4bb9-b6c0-a7cc946da748/Himare.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "4": {
      lat: 41.318,
      lng: 19.453,
      name: "Durres",
      description: "<img src=\"https://static.wixstatic.com/media/7fda7d_c0b59ee096f74eabbd20cb75512823a0~mv2.jpg/v1/fill/w_612,h_370,al_c,q_80,enc_auto/7fda7d_c0b59ee096f74eabbd20cb75512823a0~mv2.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "https://www.google.com/maps/search/Restorante/@41.3315071,19.4251577,13z/data=!3m1!4b1?entry=ttu"
    },
    "5": {
      lat: 41.322,
      lng: 19.825,
      name: "Tirane",
      size: "25",
      color: "orange",
      description: "<img src=\"https://cdn.britannica.com/35/195935-050-456D7CBC/Skanderbeg-Square-Tirana-Albania.jpg\" alt=\"Tirana\" style=\"height: 200px; width: 250px;\">",
      type: "star",
      url: "./individualTour.html"
    },
    "6": {
      lat: 40.616,
      lng: 20.777,
      name: "Korce",
      description: "<img src=\"data:image/jpeg;base64,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\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "7": {
      lat: 42.068,
      lng: 19.512,
      name: "Shkoder",
      description: "<img src=\"https://cdn.getyourguide.com/img/tour/62b1c2ccb4df6.jpeg/146.jpg\" alt=\"Lezhe\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "8": {
      lat: 41.782,
      lng: 19.646,
      name: "Lezhe",
      description: "<img src=\"https://thebalkanista.com/wp-content/uploads/2019/04/Skanderbeg_Mausoleum_Drin_River_and_Lezh%C3%AB_Castle.jpg\" alt=\"Lezhe\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "9": {
      lat: 41.111,
      lng: 20.082,
      name: "Elbasan",
      description: "<img src=\"https://t4.ftcdn.net/jpg/02/83/59/35/360_F_283593518_ommTZ2EprOS8jYqoRrQ2p6uIytGCendI.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "10": {
      lat: 40.739,
      lng: 19.574,
      name: "Fier",
      description: "<img src=\"https://cdn.albanianews.al/wp-content/uploads/2018/05/centro-di-fier.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "11": {
      lat: 40.713,
      lng: 19.939,
      name: "Berat",
      description: "<img src=\"https://cdn.albanianews.al/wp-content/uploads/2019/07/Berat-Albania.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "12": {
      lat: 41.685,
      lng: 20.425,
      name: "Diber",
      description: "<img src=\"https://www.wideworldtrips.com/wp-content/uploads/2020/07/top-places-to-visit-in-diber.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "13": {
      lat: 40.477,
      lng: 19.488,
      name: "Vlore",
      description: "<img src=\"https://eis.epoka.edu.al/uploads/profilepic/img_15025_1608027118.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\"><br><span>Gjith ai burre e shtypi<br> makina e beri fertele</span>",
      url: "./individualTour.html"
    },
    "14": {
      lat: 40.085,
      lng: 20.144,
      name: "Gjirokaster",
      description: "<img src=\"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/94/1c/caption.jpg?w=1200&h=-1&s=1\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "15": {
      lat: 42.085,
      lng: 20.422,
      name: "Kukes",
      description: "<img src=\"https://www.imalbania.com/kosova/wp-content/uploads/2022/05/1653546360_kukes-1.png\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "16": {
      lat: 41.511,
      lng: 19.79,
      name: "Kruje",
      description: "<img src=\"https://cms.pine.al/media/images/2022/07/27/62e147ec30274-qafe6.jpg\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    },
    "17": {
      lat: 42.402,
      lng: 20.167,
      name: "Tropoje",
      description: "<img src=\"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4d/5f/13/viaggio-in-albania.jpg?w=600&h=400&s=1\" alt=\"\" style=\"height: 200px; width: 250px;\">",
      url: "./individualTour.html"
    }
  },
  labels: {
    "0": {
      name: "Sarande",
      x: 416.8,
      y: 2081.4,
      parent_type: "location",
      parent_id: "0"
    },
    "1": {
      name: "Permet",
      x: 615.3,
      y: 1817.8,
      parent_type: "location",
      parent_id: "1"
    },
    "2": {
      name: "Valbone",
      x: 354.5,
      y: 156.1,
      parent_type: "location",
      parent_id: "2"
    },
    "3": {
      name: "Himare",
      x: 272.4,
      y: 1913.4,
      parent_type: "location",
      parent_id: "3"
    },
    "4": {
      name: "Durres",
      x: 108.8,
      y: 1012.4,
      parent_type: "location",
      parent_id: "4"
    },
    "5": {
      name: "Tirane",
      x: 317.9,
      y: 1009.4,
      parent_type: "location",
      parent_id: "5"
    },
    "6": {
      name: "Korce",
      x: 853.1,
      y: 1535,
      parent_type: "location",
      parent_id: "6"
    },
    "7": {
      name: "Shkoder",
      x: 142,
      y: 447.7,
      parent_type: "location",
      parent_id: "7"
    },
    "8": {
      name: "Lezhe",
      x: 217.3,
      y: 663.8,
      parent_type: "location",
      parent_id: "8"
    },
    "9": {
      name: "Elbasan",
      x: 462.4,
      y: 1167,
      parent_type: "location",
      parent_id: "9"
    },
    "10": {
      name: "Fier",
      x: 176.8,
      y: 1443.8,
      parent_type: "location",
      parent_id: "10"
    },
    "11": {
      name: "Berat",
      x: 382,
      y: 1463.1,
      parent_type: "location",
      parent_id: "11"
    },
    "12": {
      name: "Diber",
      x: 655.2,
      y: 736.9,
      parent_type: "location",
      parent_id: "12"
    },
    "13": {
      name: "Vlore",
      x: 128.5,
      y: 1637.8,
      parent_type: "location",
      parent_id: "13"
    },
    "14": {
      name: "Gjirokaster",
      x: 497.2,
      y: 1926.6,
      parent_type: "location",
      parent_id: "14"
    },
    "15": {
      name: "Kukes",
      x: 653.5,
      y: 434.9,
      parent_type: "location",
      parent_id: "15"
    },
    "16": {
      name: "Kruje",
      x: 298.3,
      y: 867.7,
      parent_type: "location",
      parent_id: "16"
    },
    "17": {
      name: "Tropoje",
      x: 510.2,
      y: 194.2,
      parent_type: "location",
      parent_id: "17"
    }
  },
  legend: {
    entries: []
  },
  regions: {},
  data: {
    data: {}
  }
};

