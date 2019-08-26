SELECT * FROM properties
WHERE mls_number = $1
AND city = $2
AND state = $3
AND zipcode = $4
AND bedrooms = $5
AND bathrooms = $6
AND square_feet = $7