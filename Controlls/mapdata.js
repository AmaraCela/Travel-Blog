var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#000",
    background_transparent: "no",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#579BD3",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
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
      name: "Durrës",
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
      name: "Lezhë"
    },
    ALB1529: {
      name: "Tirane"
    }
  },
  locations: {
    "0": {
      lat: "41.3275",
      lng: "19.818889",
      name: "Tirana"
    }
  },
  labels: {},
  legend: {
    entries: []
  },
  regions: {}
};

// Loop through each property in the state_specific object and print the names
// for (var key in simplemaps_countrymap_mapdata.state_specific) {
//   if (simplemaps_countrymap_mapdata.state_specific.hasOwnProperty(key)) {
//     var cityName = simplemaps_countrymap_mapdata.state_specific[key].name;
//     console.log("City name:", cityName);
//   }
// }

var locations = document.getElementsByClassName("simplemaps-marker");

for (var i = 0; i < locations.length; i++) {
  locations[i].addEventListener("click", function(event) {
    var locationId = event.target.id;
    var cityName = simplemaps_countrymap_mapdata.state_specific[locationId].name;

    console.log("Clicked city:", cityName);
  });
}
