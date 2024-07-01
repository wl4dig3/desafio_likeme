create table post (
	id serial primary key,
	titulo varchar(25),
	img varchar(1000),
	descripcion varchar(255),
	likes int

);
select * from post