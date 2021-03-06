import React from 'react';

const Misc = () => {
    window.scrollTo({
        top: 0,
      });
    return (
        <main className="about" data-aos="fade-up">
        <h1>Miscellaneous</h1>
            <img className="unicorn" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/palm-tree_1f334.png" alt="palm tree icon"/>
        <h3>Bassist</h3>
        <p>I picked up the bass nearly 4 years ago, and I haven't put it down since. This instrument is my voice and my muse for inspiration, creativity, and love. I'm a groove bassist, I love to play, forever.</p>
            <div className="tools bass" data-aos="fade-up">
                <p>My favorite Basses:</p>
                <div className="tool">
                    <img src="/images/about/sterling.png" alt="Sketch"/>
                    <p>Stingray</p>
                </div>
                <div className="tool">
                    <img src="/images/about/pbass.png" alt="Figma"/>
                    <p>P-bass</p>
                </div>
                <div className="tool">
                    <img src="/images/about/lakland.png" alt="xd"/>
                    <p>Jazz Bass</p>
                </div>
            </div>
            <div data-aos="fade-up">
            <h3>Performer</h3>
            <p>I love to play in bands, I will constantly find people to play with - in whatever location I'm in. My favorite genre of music to play is funk music, Motown, jazz, the occaisonal grunge and alternative which is hard to avoid nowadays. I love all music!</p>
            <img className="about-img" src="/images/about/jfunk2.png" alt="J-Funk" />

            </div>
            <div className="tools artist" data-aos="fade-up">
                <p>My music heroes:</p>
                <div className="tool">
                    <img src="http://www.markbass.it/media/filer_public_thumbnails/filer_public/0e/e4/0ee4a7d2-cc79-4924-adf9-48970513beb8/joe_dart_-_vulfpeck.jpg__1980x1980_q85_subsampling-2.jpg" alt="Joe Dart"/>
                    <p>Joe Dart</p>
                </div>
                <div className="tool">
                    <img src="https://i0.wp.com/www.notreble.com/wp-content/uploads/2012/04/james-jamerson-600x400.jpg" alt="James Jamerson"/>
                    <p>James Jamerson</p>
                </div>
                <div className="tool">
                    <img src="https://www.premierguitar.com/ext/resources/images/content/2018_10/FEAT/MonoNeon/Dec18_PG_FEAT_MonoNeon_Live-with-Ghost-Note_Photo-by-Fred-SanFilipo_WEB.jpg" alt="MonoNeon"/>
                    <p>MonoNeon</p>
                </div>
            </div>
        </main>
    );
}

export default Misc;