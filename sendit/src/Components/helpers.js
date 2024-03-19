
export const getCityCoordinates = (cityName) => {
    switch (cityName.toLowerCase()) {
      case "nairobi":
        return { lat: -1.2921, lng: 36.8219 }; 
      case "garrisa":
        return { lat: -0.5236333, lng: 40.3564053 };
      case "meru":
        return { lat: 0.2254509, lng: 37.7772624 };
      case "wajir":
        return { lat: 1.9394402, lng: 40.024736 };
      case "moyale":
        return { lat: 2.868853, lng: 38.8320324 };
      case "mombasa":
        return { lat: -4.05052, lng: 39.667169 };
      case "nakuru":
        return { lat: -0.2802724, lng: 36.0712048 };
      case "kisumu":
        return { lat: -0.1029109, lng: 34.7541761 };
      case "busia":
        return { lat: 0.3712048, lng: 34.2647952 };
      case "kericho":
        return { lat: -0.366667, lng: 35.283333 };
      case "mbale":
        return { lat: 0.581944, lng: 34.751944 };
      case "vihiga":
        return { lat: 0.0704, lng: 34.7397 };
      case "mandera":
        return { lat: 3.9384, lng: 41.8622 };
      case "marsabit":
        return { lat: 2.3358, lng: 37.9891 };
      case "ngong":
        return { lat: -1.366667, lng: 36.65 };
      case "narok":
        return { lat: -1.0807, lng: 35.8711 };
      case "kisii":
        return { lat: -0.6822, lng: 34.7791 };
      case "eldoret":
        return { lat: 0.5200, lng: 35.2697 };
      case "thika":
        return { lat: -1.0371, lng: 37.0726 };
      case "malindi":
        return { lat: -3.2175, lng: 40.1191 };
      case "kitale":
        return { lat: 1.0151, lng: 35.0064 };
      case "kakamega":
        return { lat: 0.2811, lng: 34.7519 };
      case "nyeri":
        return { lat: -0.4177, lng: 36.9511 };
      case "nyamira":
        return { lat: -0.5634, lng: 34.9206 }; // Nyamira
      case "nyandarua":
        return { lat: -0.3748, lng: 36.3628 }; // Nyandarua
      case "lamu":
        return { lat: -2.2717, lng: 40.9020 }; // Lamu
      case "tana-river":
        return { lat: -2.2132, lng: 40.9020 }; // Tana River
      case "taita-taveta":
        return { lat: -3.4451, lng: 38.0234 }; // Taita Taveta
      case "migori":
        return { lat: -1.0632, lng: 34.4732 }; // Migori  
      case "kilifi":
        return { lat: -3.6336, lng: 39.8494 }; // Kilifi
      case "makueni":
        return { lat: -2.3222, lng: 38.1708 }; // Makueni
      case "siaya":
        return { lat: 0.0604, lng: 34.2883 }; // Siaya
      case "trans-nzoia":
        return { lat: 1.0193, lng: 35.0036 }; // Trans Nzoia
      case "kirinyaga":
        return { lat: -0.6460, lng: 37.2089 }; // Kirinyaga
      case "bomet":
        return { lat: -0.7812, lng: 35.3410 }; // Bomet
      case "marakwet":
        return { lat: 0.8517, lng: 35.5320 }; // Elgeyo-Marakwet
      case "isio-loitoktok":
        return { lat: -2.8034, lng: 37.6151 }; // Isiolo
      case "nandi-hills":
        return { lat: 0.0970, lng: 35.3632 }; // Nandi Hill
      case "machakos":
        return { lat: -1.5052, lng: 37.2623 };
      case "nanyuki":
        return { lat: 0.0167, lng: 37.0744 };
      case "bungoma":
        return { lat: 0.5636, lng: 34.5609 };
      case "mumias":
        return { lat: 0.3362, lng: 34.4870 };
      case "homabay":
        return { lat: -0.5404, lng: 34.5454 };
      case "webuye":
        return { lat: 1.3386, lng: 34.7376 };
      case "kiserian":
        return { lat: -1.3922, lng: 36.6885 };
      default:
        return { lat: -1.2921, lng: 36.8219 }; 
    }
  };