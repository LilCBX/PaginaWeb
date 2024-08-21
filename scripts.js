function showTeamInfo() {
    const teamSelect = document.getElementById('team-select');
    const teamInfoDiv = document.getElementById('team-info');
    const team = teamSelect.value;

    const teamsInfo = {
        lakers: {
            name: 'Los Angeles Lakers',
            logo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg',
            players: 'LeBron James, Anthony Davis, Russell Westbrook',
            championships: 17,
            history: 'Fundado en 1947, es uno de los equipos más exitosos en la historia de la NBA.'
        },
        warriors: {
            name: 'Golden State Warriors',
            logo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg',
            players: 'Stephen Curry, Klay Thompson, Draymond Green',
            championships: 7,
            history: 'Fundado en 1946, ha ganado múltiples campeonatos en la última década.'
        },
        bulls: {
            name: 'Chicago Bulls',
            logo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg',
            players: 'Zach LaVine, DeMar DeRozan, Nikola Vucevic',
            championships: 6,
            history: 'Fundado en 1966, es famoso por la era de Michael Jordan en los años 90.'
        },
        celtics: {
            name: 'Boston Celtics',
            logo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg',
            players: 'Jayson Tatum, Jaylen Brown, Marcus Smart',
            championships: 17,
            history: 'Fundado en 1946, es el equipo más laureado de la NBA junto con los Lakers.'
        },
        heat: {
            name: 'Miami Heat',
            logo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg',
            players: 'Jimmy Butler, Bam Adebayo, Kyle Lowry',
            championships: 3,
            history: 'Fundado en 1988, ha ganado tres campeonatos en las últimas dos décadas.'
        },
        nets: {
            name: 'Brooklyn Nets',
            logo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg',
            players: 'Kevin Durant, Kyrie Irving, James Harden',
            championships: 0,
            history: 'Fundado en 1967, ha tenido varios cambios de nombre y ubicación.'
        },
        bucks: {
            name: 'Milwaukee Bucks',
            logo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg',
            players: 'Giannis Antetokounmpo, Khris Middleton, Jrue Holiday',
            championships: 2,
            history: 'Fundado en 1968, ha ganado campeonatos en 1971 y 2021.'
        },
        raptors: {
            name: 'Toronto Raptors',
            logo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg',
            players: 'Fred VanVleet, Pascal Siakam, OG Anunoby',
            championships: 1,
            history: 'Fundado en 1995, es el único equipo canadiense en la NBA.'
        },
        mavericks: {
            name: 'Dallas Mavericks',
            logo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg',
            players: 'Luka Dončić, Kristaps Porziņģis, Tim Hardaway Jr.',
            championships: 1,
            history: 'Fundado en 1980, ganó su único campeonato en 2011.'
        },
        '76ers': {
            name: 'Philadelphia 76ers',
            logo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg',
            players: 'Joel Embiid, Ben Simmons, Tobias Harris',
            championships: 3,
            history: 'Fundado en 1946, es uno de los equipos más antiguos de la NBA.'
        }
        // Puedes agregar aquí la información de más equipos según lo necesites
    };

    if (team && teamsInfo[team]) {
        const info = teamsInfo[team];
        teamInfoDiv.innerHTML = `
            <img src="${info.logo}" alt="${info.name} Logo">
            <h2>${info.name}</h2>
            <p><strong>Jugadores:</strong> ${info.players}</p>
            <p><strong>Campeonatos Ganados:</strong> ${info.championships}</p>
            <p><strong>Historia:</strong> ${info.history}</p>
        `;
    } else {
        teamInfoDiv.innerHTML = '<p>Selecciona un equipo para ver la información.</p>';
    }
}
