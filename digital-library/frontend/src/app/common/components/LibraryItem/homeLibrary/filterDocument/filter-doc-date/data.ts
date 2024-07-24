export const convertDateToFrenchFormat = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const formattedDate = `${day} ${monthNames[month]} ${year}`;
    return formattedDate;
};

export const parseDate = (dateString: any) => {
    const [day, month, year] = dateString.split(" ");
    const months = {
        "Janvier": "01",
        "Février": "02",
        "Mars": "03",
        "Avril": "04",
        "Mai": "05",
        "Juin": "06",
        "Juillet": "07",
        "Août": "08",
        "Septembre": "09",
        "Octobre": "10",
        "Novembre": "11",
        "Décembre": "12"
    } as any;
    return new Date(`${year}-${months[month]}-${day}`);
};