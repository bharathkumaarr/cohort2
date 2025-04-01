**express and HTTP with some examples**

EX: going to the doctor. doctor goes to a clinic. people go to him one by one, so here the doctor is single threaded. only one patient at a time.
procedure to go to a doctor.
patient first enter through door --> then people wait in the waiting area --> finally to the doctors cabin.
doctors checks one by one.
doctor tells one patient to go get their medicines. (dedicating a task) whenever this person takes and comes back with medicines, should aagain wait in the waiting area and then to the doctors cabin.


here, doctors here similar to js thread. can do one thing at a time.
our js logic/function is a doctor.
but only you can call your logic/ function.

now we need to expose this to the world. so people can use it.
this is where **HTTP** is used, to transfer the data. **hyper text transfer protocol**.
by this we will be able to create a clinic/hospital so people visit you/use your logic or program or function you've written.

how to create a http server?
Answer: **Express** (one of them, many ways present)

let us create a calculateSum function and use express to create http server.


..request methods
get - like going for consultation to get a check up
post - going to get a new kidnety inserted
put - get kidney replaced
delete  - going to get a kidney removed


..status codes  - to signal to the frontend
200, 203, 205 - everythign went fine
404 - doctor not in hospital/ route request not present
500 - mid surgery light went away
411 - inputs were incorrect
403 - you were not allowed inside hospital/ no access

lets create an **in memory** hospital (store all data in a variable)

assignment

: create 4 routes,
get, {to check how many kidneys they got}
post, {to add a new kidney}
put, {to replace a kidney to make it healthy}
delete, {remove a kidney}

///query parameters,
///popular parameters,


using **postman** to post, ..
