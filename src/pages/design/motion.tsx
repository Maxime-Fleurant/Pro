import { FunctionComponent } from 'react';
import Head from 'next/head';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTheme } from 'emotion-theming';
import { quote } from '../../common/components/Layout/style';
import ArticleNavigation from '../../common/components/Article/Navigation/ArticleNavigation';
import { SimpleCell } from '../../common/components/Cell/SimpleCell';
import ArticleHead from '../../common/components/Article/ArticleHead/ArticleHead';
import { mainText } from '../../common/components/Article/ArticleHead/articleHeaderStyle';
import { ITheme } from '../../common/components/Layout/Theme';
import LogoAnime from '../../common/components/Layout/logoAnime';
import LogoAnimeFull from '../../common/components/Layout/logoAnimeFull';

const Apollo: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <Head>
        <title>Motion</title>
      </Head>
      <ArticleNavigation
        content={[
          {
            name: 'Navigation',
            items: [{ name: 'Intro', href: '#intro' }],
          },
          {
            name: 'Ressources',
            items: [
              {
                name: 'Wiki',
                href: 'https://en.wikipedia.org/wiki/Motion_graphic_design',
                outside: true,
              },
            ],
          },
        ]}
      />

      <SimpleCell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 1, rowEnd: 2, columnStart: 1, columnEnd: 25 }}
      >
        <ArticleHead
          titleContent="Motion"
          logo={<span>💠</span>}
          desc="Every drawing can be understood as a motion study since it is a path
          of motion recorded by graphic means."
          wiki="https://en.wikipedia.org/wiki/Motion_graphic_design"
          detail="Design | Type"
        />
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
        mobilPos={{ rowStart: 2, rowEnd: 3, columnStart: 1, columnEnd: 25 }}
      >
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce
          duration={1.5}
        >
          <div css={mainText}>
            Time and motion are closely related principles. Any word or image
            that moves functions both spatially and temporally. Motion is a kind
            of change, and change takes place in time. Motion can be implied as
            well as literal, however. Artists have long sought ways to represent
            the movement of bodies and the passage of time within the realm of
            static, two-dimensional space.
            <br />
            <br /> Time and motion are considerations for all design work, from
            a multipage printed book, whose pages follow each other in time, to
            animations for film and television, which have literal duration. Any
            still image has implied motion (or implied stasis), while motion
            graphics share compositional principles with print.
            <br />
            <br /> Designers today routinely work in time-based media as well as
            print, and a design campaign often must function across multiple
            media simultaneously.
          </div>
        </ScrollAnimation>
      </SimpleCell>

      <SimpleCell
        deskPos={{ rowStart: 12, rowEnd: 13, columnStart: 14, columnEnd: 21 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 4, columnEnd: 22 }}
        mobilPos={{ rowStart: 3, rowEnd: 4, columnStart: 4, columnEnd: 22 }}
        relative
        ratio={1}
      >
        <LogoAnimeFull />
      </SimpleCell>
    </>
  );
};

export default Apollo;
