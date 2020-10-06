/** @jsx jsx */
import React, {useState} from "react"
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from "gatsby"


const SeoContentText = () => {
    const [textOpen, toggleMenu] = useState(false)

    const data = useStaticQuery(graphql`{
        wordpress {
          pageBy(uri: "main") {
            PageMain {
                blockSeo1
                blockSeo2
                blockSeo3
                blockSeo4
                blockSeo5
                blockSeo6
                blockSeoTitle2
                blockSeoTitle3
                blockSeoTitle4
                blockSeoTitle5
                blockSeoTitle6
            }
          }
        }
      }
      `)

    return (
    <div
        sx={{
            padding: '0 5.208vw',
            margin: '0 auto',
            width: '100%',
            marginTop: ['2.6223vw', '5vh', '5vh', '2.6223vw'],
        }}
    >
        <div
            sx={{
                overflow: 'hidden',
                position: 'relative',
                fontFamily: 'body'
            }}
        >
        <div
            sx={{
                padding: ['1.5625vw', '20px', '20px', '1.5625vw'],
                background: 'linear-gradient(39.9deg,#0B6CFE 22.83%,#458FFF 79.5%)',
                borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
            }}
        >
        <div
            sx={{
                fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                lineHeight: '1.66',
                color: 'white'
            }}
            dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeo1 }}
        />
        </div>
        <div sx={{
            display: 'flex',
            flexFlow: ['row nowrap', 'column', 'column', 'row nowrap' ]
            
        }}>

        
        <div
            sx={{
                padding: ['1.5625vw', '20px', '20px', '1.5625vw'],
                background: 'white',
                borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                marginTop: '2.25vh',
                marginBottom: '2.25vh',
                width: ['50%', '100%', '100%', '50%'],
                fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                lineHeight: '1.66',
                color: '#000000'
                
            }}
        >
        <Styled.h3
            sx={{
                color: '#000000',
                marginBottom: ['1.4187vw', '2.25vh', '1.4187vw',],
                paddingBottom: ['1.7187vw', '2.25vh', '1.7187vw',],
                borderBottom: '1px solid #E5E5E5'
            }}
            dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeoTitle2 }} />
         <div sx={{paddingLeft: ['1.0833vw', '20px', '1.0833vw']}} dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeo2 }}/>  
        </div>
        <div
            sx={{
                padding: ['1.5625vw', '20px', '20px', '1.5625vw'],
                background: 'white',
                borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                marginTop: ['2.25vh', 0, 0, '2.25vh'],
                marginBottom: '2.25vh',
                marginLeft: ['1.5625vw', 0, 0, '1.5625vw'],
                fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                lineHeight: '1.66',
                color: '#000000',
                width: ['50%', '100%', '100%', '50%'],
            }}
        >
        <Styled.h3
            sx={{
                color: '#000000',
                marginBottom: ['1.4187vw', '2.25vh', '1.4187vw',],
                paddingBottom: ['1.7187vw', '2.25vh', '1.7187vw',],
                borderBottom: '1px solid #E5E5E5'
            }}
            dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeoTitle3 }} />
        <div sx={{paddingLeft: ['1.0833vw', '20px', '1.0833vw']}} dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeo3 }}/>
        </div>
        </div>
        <div sx={{
            display: 'flex',
            flexFlow: ['row nowrap', 'column', 'column', 'row nowrap' ]
            
        }}>
        <div
            sx={{
                padding: ['1.5625vw', '20px', '20px', '1.5625vw'],
                background: 'white',
                borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                marginBottom: '2.25vh',
                fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                lineHeight: '1.66',
                color: '#000000',
                width: ['50%', '100%', '100%', '50%']
            }}
        >
        <Styled.h3
            sx={{
                color: '#000000',
                marginBottom: ['1.4187vw', '2.25vh', '1.4187vw',],
                paddingBottom: ['1.7187vw', '2.25vh', '1.7187vw',],
                borderBottom: '1px solid #E5E5E5'
            }}
            dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeoTitle4 }} />
        <div sx={{paddingLeft: ['1.0833vw', '20px', '1.0833vw']}} dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeo4 }}/>
        </div>
        <div
            sx={{
                padding: ['1.5625vw', '20px', '20px', '1.5625vw'],
                background: 'white',
                borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                marginBottom: '2.25vh',
                fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                lineHeight: '1.66',
                color: '#000000',
                width: ['50%', '100%', '100%', '50%'],
                marginLeft: ['1.5625vw', 0, 0, '1.5625vw']
            }}
        >
          <Styled.h3
            sx={{
                color: '#000000',
                marginBottom: ['1.4187vw', '2.25vh', '1.4187vw',],
                paddingBottom: ['1.7187vw', '2.25vh', '1.7187vw',],
                borderBottom: '1px solid #E5E5E5'
                
            }}
            dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeoTitle5 }}/>
        <div sx={{paddingLeft: ['1.0833vw', '20px', '1.0833vw']}} dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeo5 }}/>
        </div>
        </div>
        <div
            sx={{
                padding: ['1.5625vw', '20px', '20px', '1.5625vw'],
                background: '#00969F',
                borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                marginBottom: '2.25vh',
                fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                lineHeight: '1.66',
                color: 'white'
            }}
        >
        <Styled.h3
            sx={{
                color: 'white',
                marginBottom: ['1.4187vw', '2.25vh', '1.4187vw',],
                paddingBottom: ['1.7187vw', '2.25vh', '1.7187vw',],
                borderBottom: '1px solid rgba(255,255,255,0.15)'
            }}
            dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeoTitle6 }}/>
       <div  dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.blockSeo6 }}/>
        </div>
        </div>
    </div>

    )
}

export default SeoContentText