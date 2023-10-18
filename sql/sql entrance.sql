select title from albums;
select FirstName, LastName 
from employees;

-- DISTINCT
select distinct Country, City from customers;

--where yani sart

select * from customers where Country = "Brazil";
select * from customers where Country != "Brazil";
select * from customers where CustomerId = 17;
select * from invoices where total >= 13.86;
select Composer, name from tracks where Composer="AC/DC";

--LIMIT

select * from tracks limit 3;
select Composer, name from tracks where Composer="AC/DC" LIMIT 3;

--ORDER by asc / decs
select * from tracks ORDER by name desc;
select Composer, name from tracks where Composer="AC/DC" order by name;

--and / or / not

select * from invoices where BillingCountry = "Germany" and BillingCity="Berlin";
select * from invoices where BillingCountry = "Germany" or BillingCity="Paris";

--between
SELECT * from invoices where total>=5 and total<=10;
SELECT * from invoices where total BETWEEN 5 and 10;
SELECT * from invoices where total not BETWEEN 5 and 10;

--in/not in
select * from invoices where BillingCity = "Paris" or BillingCity="Berlin";
select * from invoices where BillingCity in ("Paris", "Berlin");
select * from invoices where BillingCity not in ("Paris", "Berlin");

--like 
select * from artists where name like "%A";    --sonu a ile biten
select * from artists where name like "A%";    --a ile baslayan
select * from artists where name like "%zep%";    --zep iceren
select * from artists where name like "_ccept";
select * from artists where name like "Ac_ept";
select * from artists where name like "Ac_ep%";

