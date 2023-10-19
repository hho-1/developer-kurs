--1
select name, Composer from tracks;

--2
select * from tracks;

--3
select composer from tracks where not Composer = "NULL" group by Composer;
select distinct Composer from tracks where not Composer = "NULL";

--4
select AlbumId, MediaTypeId from tracks GROUP by AlbumId;
select DISTINCT AlbumId, MediaTypeId from tracks;

--5
SELECT name, TrackId from tracks where Composer="Jorge Ben";

--6
SELECT * from invoices where total > 25;

--7
SELECT * from invoices where total < 15 limit 5;

--8
select * from invoices where total > 10 order by total desc limit 2;

--9
select * from invoices where BillingCountry != "Canada" order by total limit 10;
select * from invoices where not BillingCountry = "Canada" order by total limit 10;

--10
select InvoiceId, CustomerId, total from invoices order by CustomerId, total DESC;

--11
select name from tracks where name like "B%S";

--12
select max(InvoiceDate) from invoices where InvoiceDate BETWEEN "2009%" and "2011%";

--13
select FirstName, LastName from customers GROUP by Country HAVING Country = "Norway" or Country="Belgium";
select FirstName, LastName from customers where Country = "Norway" or Country="Belgium";
select FirstName, LastName from customers where Country in ("Norway", "Belgium");

--14
select name as TrackName from tracks where Composer like "%zappa%";

--15
SELECT count(*) from tracks;
SELECT count(*) from invoices;

--16
SELECT count(DISTINCT Composer) from tracks;

--17
SELECT AlbumId, count(*) from tracks GROUP by AlbumId ORDER by count(*) DESC;

select AlbumId, count(TrackId) as NumberofTracks 
from tracks 
GROUP by AlbumId 
ORDER by NumberofTracks 
desc;

--18
select name, max(Milliseconds) from tracks;
select name, min(Milliseconds) from tracks;

--19
select avg(Milliseconds) from tracks;
select * from tracks where Milliseconds < (select avg(Milliseconds) from tracks);

--20
select Composer, count(TrackId) from tracks where not Composer = "NULL" group by Composer;

--21
SELECT tracks.TrackId, tracks.name as TrackName, genres.name as genre from tracks join genres on tracks.GenreId = genres.GenreId;

--22
select artists.name as ArtistName, albums.Title as AlbumName from artists join albums on artists.ArtistId = albums.ArtistId;

--23
select albums.AlbumId, albums.Title as AlbumName, min(tracks.Milliseconds) as MinimumDuration from albums join tracks on albums.AlbumId = tracks.AlbumId GROUP by AlbumName order by MinimumDuration desc;

--24
SELECT albums.Title as AlbumName, sum(tracks.Milliseconds)  as albumDuration 
from albums 
join tracks 
on albums.AlbumId = tracks.AlbumId 
GROUP by albums.title 
having albumDuration > 3600000 
ORDER by albumDuration 
DESC;

--25
SELECT tracks.TrackId, tracks.name as Trackname, tracks.AlbumId, albums.title
from tracks 
join albums on tracks.AlbumId = albums.AlbumId 
where albums.Title in ('Prenda Minha', 'Heart of the Night', 'Out of Exile');
