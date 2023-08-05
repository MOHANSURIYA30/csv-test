const fs = require("fs");
const { parse } = require("csv-parse");

let row1 =[];
let objs;
let agents =[];
let userType = [];
let policy_type = [];
let cmpny_name =[];
let category_name =[];
let account_name =[];
let city = [];
let account_type =[];
let state =[];

// fs.createReadStream("./sheet1.csv")
fs.createReadStream("./data-sheet.csv")
.pipe(parse({ delimiter: ",", from_line: 2  }))
 
.on("data", function (row) {
    row1.push(row);
    agents.push({name:row[0]});
    userType.push({type:row[1]});
    policy_type.push({type:row[7]});
    cmpny_name.push({ name:row[8] });
    category_name.push({ name:row[9] });
    account_name.push({ name:row[13] });
    city.push({ name:row[17] });
    account_type.push({ type:row[18] });
    state.push({ name:row[21] });

  })

  .on("end", function () {
     objs = row1.map(x => ({ 
        agent: x[0], 
        userType: x[1],
        policy_mode:x[2],
        producer:x[3],
        policy_number:x[4],
        premium_amount_written:x[5],
        premium_amount:x[6],
        policy_type:x[7],
        company_name:x[8],
        category_name:x[9],
        policy_start_date:x[10],
        policy_end_date:x[11],
        csr:x[12],
        account_name:x[13],
        email:x[14],
        gender:x[15],
        firstname:x[16],
        city:x[17],
        account_type:x[18],
        phone:x[19],
        address:x[20],
        state:x[21],
        zip:x[22],
        dob:x[23],
        primary:x[24],
        ApplicantID:x[25],
        agency_id:x[26],
        hasActive:x[27],
        ClientPolicy:x[28] 
      }));
    Object_vals();
    console.log("finished");
    // fs.writeFileSync('program.json',JSON.stringify(objs))
  })
  
  .on("error", function (error) {
    console.log("error executed");
    console.log(error.message);
  });



  Object_vals = ()=>{
//    console.log(objs);



agents = removeDuplicates(agents)
console.log(agents);

userType = removeDuplicates(userType)
console.log("userType");
console.log(userType);

policy_type = removeDuplicates(policy_type)
console.log("policy type");
console.log(policy_type);

cmpny_name = removeDuplicates(cmpny_name)
console.log("company name");
console.log(cmpny_name);

category_name = removeDuplicates(category_name)
console.log("category name");
console.log(category_name);

account_name = removeDuplicates(account_name)
console.log("account name");
console.log(account_name);

city = removeDuplicates(city)
console.log("city");
console.log(city);

account_type = removeDuplicates(account_type)
console.log("account type");
console.log(account_type);

state = removeDuplicates(state)
console.log("state");
console.log(state);


  }


removeDuplicates =(dupArr=[]) =>
{
  jsonObject = dupArr.map(JSON.stringify);
  uniqueSet = new Set(jsonObject);
  uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  return uniqueArray
}  