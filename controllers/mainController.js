let songs = [
    {
        id: 1,
        title: 'Bertahan/Pergi',
        artist: 'Raisa'
    },
    {
        id: 2,
        title: 'Lenggang Puspita',
        artist: 'Afgan'
    },
    {
        id: 3,
        title: 'Save Your Teards',
        artist: 'The Weeknd'
    }
]


exports.getAllSongs = (req, res) => {
    res.send(songs)
}

exports.addSong = (req, res) => {
    const { title, artist } = req.body
    const newSongs = [
        ...songs,
        {
            id: new Date().valueOf(),
            title: title,
            artist: artist,
        }
    ];
    songs = newSongs
    res.status(201).send(songs)
}

exports.getSong = (req, res) => {
    const song = songs.find((song) => song.id === parseInt(req.params.id))
    if (song) {
        res.send({
            status: 'success',
            song: song
        })
    } else {
        res.send({
            status: 'failed',
            message: 'song not found'
        })
    }
}