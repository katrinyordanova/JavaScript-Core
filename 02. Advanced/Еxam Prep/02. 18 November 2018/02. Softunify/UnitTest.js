let assert=require('chai').assert;
let SoftUniFy=require('./solution');

describe('test class SoftUniFy', function () {
    let softUniFy;
    
    beforeEach(function () {
       softUniFy=new SoftUniFy(); 
    });

    it('property allSongs should be initialized as an empty object', function () {
        assert.isEmpty(softUniFy.allSongs);
        assert.isObject(softUniFy.allSongs);
    });
    
    describe('test downloadSong()', function () {
        it('should add an artist to allSongs property', function () {
            let artist='artist';
            let song='song';
            let lyrics='lyrics';
            let expectedResult={
                allSongs:{
                    artist:
                        {
                            rate:0,
                            votes:0,
                            songs:[`${song} - ${lyrics}`]
                        }
                }
            };

            assert.deepEqual(softUniFy.downloadSong(artist,song,lyrics),expectedResult);
        });


    });

    describe('test playSong()',function () {
        it('should not play song properly', function () {
            assert.equal(softUniFy.playSong('song'),`You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!`)
        });
    });

    describe('test rateArtist()',function () {
        it('should not rate an artist properly', function () {
            let expectedResult=`The Pesho is not on your artist list.`;
            let result=softUniFy.rateArtist('Pesho');
            assert.equal(expectedResult,result)
        });
    });
});

