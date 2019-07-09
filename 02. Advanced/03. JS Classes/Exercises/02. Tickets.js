let solve=function solve(ticketInformation,sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let data = [];

    Array.from(ticketInformation).forEach((element) => {
        let tokens = element.split("|");
        let destination=tokens[0];
        let price=Number(tokens[1]);
        let status=tokens[2];
        let ticket = new Ticket(destination, price, status);
        data.push(ticket);
    });

    let sortedData=[];

    switch (sortCriteria) {
        case "destination":
            sortedData=data.sort((a,b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            sortedData=data.sort((a,b) => a.destination - b.destination);
            break;
        case "status":
            sortedData=data.sort((a,b) => a.status.localeCompare(b.status));
            break;
    }
    return sortedData;
};

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);

