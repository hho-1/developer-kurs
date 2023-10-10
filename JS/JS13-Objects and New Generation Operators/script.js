
/* -------------------------------------------------------------------------- */
/*                               OBJECT METHODS                               */
/* -------------------------------------------------------------------------- */


//Nested Objects

workersList = {
    person1: {
      name: "Harold",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    },
    person2: {
      name: "Harvey",
      lastname: "Kulagikesik",
      DateOfBirth: 1998,
      job: "tester",
      salary: 40000,
      drivingLicense: true,
    },
    person3: {
      name: "Steve",
      lastname: "Satilmis",
      DateOfBirth: 2000,
      job: "developer",
      salary: 30000,
      drivingLicense: true,
    },
  };


  console.log(workersList.person2.DateOfBirth);

  console.log(workersList.person2.name);
  console.log(workersList.person2.salary);

  console.log(workersList["person3"].name);
  console.log(workersList["person3"].salary);

  let pName = "person1"

  console.log(workersList[pName].name);

  //console.log(workersList.pName.name);    //Bu calismaz.


  for(p in workersList){
    console.log(workersList[p].job);    //!Bunu for-of ile yapamazsin, o sadece arraylerde calisiyormus 
  }

for(x of Object.values(workersList)){       //Object.values bize bir array verir
    console.log(x.salary);
}

//Developer olan elemanlarin isimlerini ve maaslarini yazdirin


//const developersList = Object.values(workersList).filter((item) => item.job ==="developer")

//console.log(developersList);
//developersList.map((p) => console.log(`developer ${p.name}'in maasi: ${p.salary}'dir.`))


const developersList = Object.values(workersList).filter((x) => x.job === "developer").map((p) => console.log(`developer ${p.name}'in maasi: ${p.salary}'dir.`))

const developersList2 = Object.values(workersList).filter((x) => x.job === "developer").forEach((p) => console.log(`developer ${p.name}'in maasi: ${p.salary}'dir.`))



/* -------------------------------------------------------------------------- */
/*                     JSON => JAVASCRIPT OBJECT NOTATION                     */
/* -------------------------------------------------------------------------- */


console.clear();

const team = [
    {
      name: "Harold",
      lastname: "Uzunkulak",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    },
    {
      name: "Harry",
      lastname: "Strevy",
      DateOfBirth: 2002,
      job: "developer",
      salary: 4000,
      drivingLicense: false,
    },
    {
      name: "Rıfkı",
      lastname: "Kulagıkesik",
      DateOfBirth: 2000,
      job: "devOps",
      salary: 30000,
      drivingLicense: true,
    },
  ];


  team.map((x) => console.log(x.lastname))

  team.push(
    {
        name: "Sülüman",
      lastname: "Emperor",
      DateOfBirth: 1997,
      job: "tester",
      salary: 50000,
      drivingLicense: true,
    }
  )

  console.log(team);

  //Dizideki her elemanin meslegini göster

  for(x in team){
    console.log(team[x].job);
  }

  team.forEach((item) => console.log(item.job))   //Iki yöntem de olur


  //team dizosindeki her elemana %10 zam yapip yeni diziye aktarin

  const zamliMaas = team.map((item) => (item.salary * 1.1).toFixed(2))
  console.log(zamliMaas);



  // name ve lastnameleri birleştirip büyük harfe çeviren ve bunu  fullname key'i olarak saklayan
// salary değerlerini de 0.1 arttırıp salary keyine saklayan kodu yazın

const teamFullname = team.map((item) => {
    return {fullName : item.name.toUpperCase() + " " + item.lastname.toUpperCase(),
            salary: item.salary += item.salary * 0.1}
})
console.log(teamFullname);


//maasi 10 binden az olanlari yeni bir dizide saklayan program

const newList = team.filter((x) => x.salary < 10000).map((item) => {
    return {leastSalary: item.salary}
})
console.log(newList);

//Bu dizinin maas ortalamasini buldur

const acc = team.reduce((sum, item) => sum + item.salary, 0)
console.log(acc/team.length);






