import styles from '@styles/pages/Meet.module.css'
import Meta from '@components/Meta'
import Person from '@components/Person'

export default function Meet() {
  return (
    <div>
      <Meta title="Meet em'" />
      <body className={styles.body}>
        <h1 className={styles.title}>Meet em&apos;</h1>
        <h3 className={styles.description}>
          Zephyr is all about meeting amazing people while going across the
          country. Here you can meet some of the amazing people we&apos;ve seen
          along the{' '}
          <a href="https://zephyr.hackclub.com">Zephyr hackclub trip.</a> Super
          sorry if we got to meet you but you aren&apos;t on this list!
        </h3>
        <div className={styles.people}>
          <Person
            name="Zebulon Scoville"
            description="Zeb is the 86th NASA flight director. He grew up in Burlington and joined us for dinner on the second night of the trip. Thank you so much for meeting with us Zeb!"
            metOn="07/16/2021"
            location="Burlington, VT"
          />
          <Person
            name="Jerry Greenfield"
            description="Jerry is the founder of Ben and Jerry's ice cream alongside Ben Cohen. Thank you so much for meeting with us Jerry!"
            metOn="07/16/2021"
            location="Burlington, VT"
          />
          <Person
            name="Lady Ada"
            description="Lady Ada, whose real name is Limor Fried, works at Adafruit and is heavily involved in their community. The group that got to meet her just saw her on the street eating dinner. Thanks for meeting with us Lady Ada!"
            metOn="07/17/2021"
            metBy="Matt, Rishi, Belle, Ella, Kunal, Pranav, and Roshan"
            location="New York City, New York"
          />
          <Person
            name="Tom Preston-Werner"
            description="Tom, who is a big sponsor of hackclub and is actually sponsoring the hacker zephyr, joined us for the entirety of the train ride. For those of you that don't already know Tom his is one of the co-founders of GitHub, creator of TOML and SemVar, as well as his web framework called Redwood JS. Thank you so much for meeting with us Tom!"
            metOn="07/19/2021 - 07/21/2021"
            location="The Zephyr Train"
          />
          <Person
            name="Guillermo Rauch"
            description="Guillermo, who is the CEO of Vercel and a supporter of hackclub, spent a generous amount of time meeting with us. He showed off all the cool stuff they are working on at Vercel with the Vercel platform and Next.js (which this site is written in by the way!). Thank you so much for meeting with us Guillermo and for being a strong supporter of hackclub!"
            metOn="07/22/2021"
            location="San Francisco, California"
          />
          <Person
            name="Quinn Slack"
            description="Quinn, who is the CEO of sourcegraph and has been a hackclub supporter from the very start, meet up with us for our final night in San Francisco. Thank you so much for meeting with us Quinn and for being such a strong supporter of hackclub!"
            metOn="07/22/2021"
            location="San Francisco, California"
          />
          <Person
            name="Jacky Zhao"
            description="Jacky is an active member of our slack community and lives in NYC. Thank you so much for meeting with us Jacky! It was great to finally meet you in real life!"
            metOn="07/17/2021"
            metBy="Matt, Rishi, Belle, Ella, Kunal, Pranav, and Roshan"
            location="New York City, New York"
          />
          <Person
            name="Lachlan Campbell"
            description="Lachlan, who used to work for hackclub, meet up with us for dinner in NYC. Thank you so much for meeting with us Lachlan!"
            location="New York City, New York"
            metOn="07/17/2021"
          />
          <Person
            name="Theo Bleier"
            description="Theo, who used to work for hackclub, meet up with us for dinner in NYC. Thank you so much for meeting with us Theo!"
            metOn="07/17/2021"
            location="New York City, New York"
          />
          <Person
            name="Amogh Chaubey"
            description="Amogh, who used to work for hackclub, meet up with us for dinner in NYC. Thank you so much for meeting with us Amogh!"
            metOn="07/17/2021"
            location="New York City, New York"
          />
          <Person
            name="Pradyun Narkadamilli"
            description="Pradyun is a member of the hackclub slack who came to meet us in San Francisco. Thanks for coming and hanging out with us Pradyun"
            metOn="07/22/2021"
            location="San Francisco, California"
          />
          <Person
            name="Jacob Haap"
            description="Jacob is a member of the hackclub slack who game to meet us in San Francisco. Thank you for coming and hanging out with us Jacob!"
            metOn="07/22/2021"
            location="San Francisco, California"
          />
          <Person
            name="Yuto N."
            description="Yuto is a member of the hackclub slack who game to meet us in San Francisco. Thank you for coming and hanging out with us Yuto!"
            metOn="07/22/2021"
            location="San Francisco, California"
          />
          <Person
            name="John Lins"
            description="John is a member of the hackclub slack who game to meet us in San Francisco. Thank you for coming and hanging out with us John!"
            metOn="07/22/2021"
            location="San Francisco, California"
          />
          <Person
            name="Kevalin Ketcham"
            description="Kevalin is a member of the hackclub slack who game to meet us in San Francisco. Thank you for coming and hanging out with us Kevalin!"
            metOn="07/22/2021"
            location="San Francisco, California"
          />
        </div>
      </body>
    </div>
  )
}
