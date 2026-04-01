import React from 'react';

export default function CanonInD() {
    return (
        <>
            <p>
                Johann Pachelbel's <em>Canon in D Major</em> is one of the most recognizable and enduring pieces of classical music. Beyond its popularity at weddings, it offers a fascinating glimpse into the elegance of Baroque music theory and compositional structure.
            </p>

            <h2>The Ostinato Bass (Basso Ostinato)</h2>
            <p>
                At the heart of the piece is a repeating bassline, known as an <em>ostinato</em>. The entire composition is built upon a simple two-measure pattern that repeats 28 times without variation:
            </p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-2 mb-4 dark:bg-gray-800 text-sm">
                D - A - B - F# - G - D - G - A
            </p>
            <p>
                This bassline serves as the unyielding foundation over which the violins weave increasingly complex melodies. It's the structural anchor of the entire piece.
            </p>

            <h2>The Chord Progression</h2>
            <p>
                The notes of the bassline dictate a specific harmonic progression that has become legendary for its emotional resonance:
            </p>
            <p className="font-mono bg-gray-100 p-2 rounded mt-2 mb-4 dark:bg-gray-800 text-sm">
                I - V - vi - iii - IV - I - IV - V
            </p>
            <p>
                This progression (D major - A major - B minor - F# minor - G major - D major - G major - A major) balances resolution with forward momentum. It starts firmly in the tonic (I), moves to the dominant (V) creating tension, drops to the relative minor (vi) adding a touch of melancholy, and eventually cycles back around through the subdominant (IV) to prepare for another iteration. This specific sequence is so effective that it has been reused in countless pop songs over the last fifty years.
            </p>

            <h2>The Canon Structure</h2>
            <p>
                While the bass plays the ostinato, three upper voices (traditionally violins) play the actual canon. A canon is a contrapuntal compositional technique where a melody is introduced and then imitated strictly by one or more other voices after a given duration.
            </p>
            <p>
                In Pachelbel's Canon, Violin 1 introduces the melody. Exactly two measures later, Violin 2 enters playing the <em>exact same notes</em>. Two measures after that, Violin 3 enters, again playing the exact same melody. What makes this a masterpiece is that despite playing the identical melody offset in time, the voices harmonize perfectly with each other and with the unchanging bassline below.
            </p>

            <h2>Evolution of Rhythm</h2>
            <p>
                As the piece progresses, the note values in the melody become progressively shorter. What starts as long, sustained quarter notes evolving into eighth notes, then sixteenth notes, and finally rapid thirty-second notes. This rhythmic diminution creates a sense of increasing energy and intensity without ever changing tempo or the underlying chord progression.
            </p>

            <h2>Conclusion</h2>
            <p>
                The enduring appeal of Canon in D lies in this paradox: it is highly rigorous, mathematical, and repetitive in its structure, yet profoundly emotional and continuous in its delivery. It is a perfect mechanism producing pure feeling.
            </p>
        </>
    );
}
