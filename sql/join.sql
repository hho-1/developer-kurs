-- inner JOIN
-- join default olarak inner JOIN
select * from albums join artists on albums.ArtistId = artists.ArtistId;

SELECT * from artists join albums on artists.ArtistId = albums.ArtistId;

-- faturalar ve kime kesildigi
select customers.FirstName, invoices.Total from invoices join customers on invoices.CustomerId=customers.CustomerId;

--her bir parcanin türünü getir
select tracks.Name, genres.Name from tracks  join genres on tracks.GenreId = genres.GenreId;