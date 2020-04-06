d3.csv("D3_data_journalism/data/data.csv").then(function(health_data) {

    // Output data to console
    console.log(health_data);

    // fields
    // id: "1"
    // state: "Alabama"
    // abbr: "AL"
    // poverty: "19.3"
    // povertyMoe: "0.5"
    // age: "38.6"
    // ageMoe: "0.2"
    // income: "42830"
    // incomeMoe: "598"
    // healthcare: "13.9"
    // healthcareLow: "12.7"
    // healthcareHigh: "15.1"
    // obesity: "33.5"
    // obesityLow: "32.1"
    // obesityHigh: "35"
    // smokes: "21.1"
    // smokesLow: "19.8"
    // smokesHigh: "22.5"
  
    // // log a list of names
    var states = health_data.map(data => data.state);
    console.log("states", states);
  
    // // Cast each hours value in tvData as a number using the unary + operator
    // tvData.forEach(function(data) {
    //   data.hours = +data.hours;
    //   console.log("Name:", data.name);
    //   console.log("Hours:", data.hours);
    // });


  }).catch(function(error) {
    console.log(error);
  });

//   <div id="scatter"></div>
    // 0: "id"
    // 1: "state"
    // 2: "abbr"
    // 3: "poverty"
    // 4: "povertyMoe"
    // 5: "age"
    // 6: "ageMoe"
    // 7: "income"
    // 8: "incomeMoe"
    // 9: "healthcare"
    // 10: "healthcareLow"
    // 11: "healthcareHigh"
    // 12: "obesity"
    // 13: "obesityLow"
    // 14: "obesityHigh"
    // 15: "smokes"
    // 16: "smokesLow"
    // 17: "smokesHigh"
    // 18: "-0.385218228"