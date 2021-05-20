DROP DATABASE b18jenli;
CREATE DATABASE b18jenli;
USE b18jenli; 

create table shopItems(
id varchar (15),
cat varchar (15),
price varchar (15),
img varchar(64),
primary key (id)
)engine=innodb;

insert into shopItems (id, cat, price, img) 
values 
('Red cup', 'cups', '69', 'redcup.jpg'), 
('White cup', 'cups', '29', 'whitecup.jpg'),
('Orange mug', 'cups', '99', 'orangemug.jpg'),
('Green mug', 'cups', '129', 'greenmug.jpg'),
('Red cup1', 'cups', '69', 'redcup1.jpg'), 
('White cup1', 'cups', '29', 'whitecup1.jpg'),
('Orange mug1', 'cups', '99', 'orangemug1.jpg'),
('Green mug1', 'cups', '129', 'greenmug1.jpg'),

('Gold bowl', 'tableware', '119', 'goldbowl.jpg'),
('White plate', 'tableware', '49', 'whiteplate.jpg'),
('Black teapot', 'tableware', '399', 'blackteapot.jpg'),
('Sushi plate', 'tableware', '79', 'sushiplate.jpg'),
('Gold bowl1', 'tableware', '119', 'goldbowl1.jpg'),
('White plate1', 'tableware', '49', 'whiteplate1.jpg'),
('Black teapot1', 'tableware', '399', 'blackteapot1.jpg'),
('Sushi plate1', 'tableware', '79', 'sushiplate1.jpg'),

('Wooden cutlery', 'utensils', '299', 'woodencutlery.jpg'),
('Black forks', 'utensils', '199', 'blackforks.jpg'),
('Utensils', 'utensils', '89', 'cookingutensils.jpg'),
('Black spoons', 'utensils', '199', 'blackspoons.jpg'),
('Wooden cutlery1', 'utensils', '299', 'woodencutlery1.jpg'),
('Black forks1', 'utensils', '199', 'blackforks1.jpg'),
('Utensils1', 'utensils', '89', 'cookingutensils1.jpg'),
('Black spoons1', 'utensils', '199', 'blackspoons1.jpg'),

('Letter art', 'walldecor', '199', 'letterart.jpg'),
('Pic set', 'walldecor', '499', 'picset.jpg'),
('Mirror', 'walldecor', '129', 'mirror.jpg'),
('Clock', 'walldecor', '299', 'clock.jpg'),
('Letter art1', 'walldecor', '199', 'letterart1.jpg'),
('Pic set1', 'walldecor', '499', 'picset1.jpg'),
('Mirror1', 'walldecor', '129', 'mirror1.jpg'),
('Clock1', 'walldecor', '299', 'clock1.jpg'),

('Mini set', 'vases', '79', 'miniset.jpg'),
('White vase', 'vases', '699', 'whitevase.jpg'),
('Green vase', 'vases', '299', 'greenvase.jpg'),
('Beige vase', 'vases', '49', 'beigevase.jpg'),
('Mini set1', 'vases', '79', 'miniset1.jpg'),
('White vase1', 'vases', '699', 'whitevase1.jpg'),
('Green vase1', 'vases', '299', 'greenvase1.jpg'),
('Beige vase1', 'vases', '49', 'beigevase1.jpg'),

('Scented candle', 'misc', '79', 'scentedcandle.jpg'),
('Pillows', 'misc', '499', 'pillows.jpg'),
('Red candle', 'misc', '99', 'redcandle.jpg'),
('Globe', 'misc', '299', 'globe.jpg'),
('Scented candle1', 'misc', '79', 'scentedcandle1.jpg'),
('Pillows1', 'misc', '499', 'pillows1.jpg'),
('Red candle1', 'misc', '99', 'redcandle1.jpg'),
('Globe1', 'misc', '299', 'globe1.jpg')
;


select * from shopItems;
