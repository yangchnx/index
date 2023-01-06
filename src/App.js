import "purecss/build/pure.css";
import React, { useState, useEffect } from "react";
import "./styles.scss";
// import "./pandoc.css"
import PostCard from "./components/PostCard";
import { 
  Button, Container, CssBaseline, FormControl, 
  Grid, Icon, IconButton, InputLabel, MenuItem, Select, Stack, Typography,
  Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText,
  AppBar, Toolbar
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [lang, setLang] = React.useState('en');
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [pageName, setPageName] = React.useState('home');
  const [markdown, setMarkdown] = React.useState('Loading');

  const handleLangChange = (event) => {
    console.log(event.target);
    setLang(event.target.value);
  };

  const getLocaleText = (i18nText, language) => {
    return language in i18nText? i18nText[language] : i18nText["en"];
  }

  const domain = "https://yangchnx.com/";
  const picFolder = process.env.PUBLIC_URL + 'pic/';

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(open);
  }

  const handlePageHome = (event) => {
    setPageName('home');
  }

  const handlePageAbout = async (event) => {
    setPageName('about');
    const text = await (await fetch(process.env.PUBLIC_URL + 'articles/' + 'about.md')).text();
    setMarkdown(text);
  }

  const IndexDrawer = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>

          <ListItem key="home" disablePadding>
            <ListItemButton value={"home"} onClick={handlePageHome}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              Home
            </ListItemButton>
          </ListItem>

          <ListItem key="about" disablePadding>
            <ListItemButton  value={"about"} onClick={handlePageAbout}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              About
            </ListItemButton>
          </ListItem>

      </List>

      <Divider />

      <List>
        
        <ListItem key="theme" disablePadding>
          <ListItemButton
                onClick={colorMode.toggleColorMode}>
                  <ListItemIcon>
                      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </ListItemIcon>
                {getLocaleText(
                  {"en": "Colour Theme", "zh-tra": "主題", "zh-sim": "主题", "tto-bro": "Tvo2D8ae", "tto": "VvaH"}, 
                  lang
                  )}
          </ListItemButton>
        </ListItem>

        <ListItem key="page-language">
          <ListItemIcon> <LanguageIcon/> </ListItemIcon>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            label="Language"
            onChange={handleLangChange}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"zh-tra"}>繁體中文</MenuItem>
            <MenuItem value={"zh-sim"}>简体中文</MenuItem>
            <MenuItem value={"tto-bro"}>b8Q7Z2D.</MenuItem>
            <MenuItem value={"tto"}>mim</MenuItem>
          </Select>
        </ListItem>

      </List>
    </Box>
  );


  return (
    <div>

          <AppBar position="sticky" color="primary">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Yang
              </Typography>
            </Toolbar>
          </AppBar>
      
      <br/>

      <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          {IndexDrawer()}
        </Drawer>
      
      <Container maxWidth="md">


        
        {pageName=='home'?(
      <Stack spacing={4} px={2} pb={4}>

        

        
      
        
        
          <Stack direction="row"  spacing={2}>

          <img
            alt="Ethan Yang Chenxi"
            src={picFolder + 'my-avatar.jpg'}
            width="72" height="72"
          />
        
          <Stack>
            <Typography  variant="h5">
            {getLocaleText(
              {"en": "Chenxi Yang", "zh-tra": "楊晨曦", "zh-sim": "杨晨曦", "tto-bro": "EeRZ T8eHXQea", "tto": "hFCmo mAFKRHm"}, 
              lang
            )}
            </Typography>
            

            <Grid>
              <IconButton href="https://github.com/yangchnx">
                <GitHubIcon/>
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/yang-chenxi/">
                <LinkedInIcon/>
              </IconButton>
              <IconButton href="https://twitter.com/yangchnx">
                <TwitterIcon/>
              </IconButton>
              <IconButton href="https://www.instagram.com/yangchnx">
                <InstagramIcon/>
              </IconButton>

              <IconButton href="https://www.zhihu.com/people/donew">
                <img alt="Zhihu" src={theme.palette.mode === 'dark' ? 
                      picFolder + 'zhihu4dark.png' : 
                      picFolder + 'zhihu4light.png'} height="24" width="24" />
              </IconButton>

              <IconButton href="https://linktr.ee/smartdramo">
                <img alt="Zhihu" src={picFolder + 'LinkTree.webp'} height="24" width="24" />
              </IconButton>
            </Grid>

          </Stack>
        </Stack>

        
        
        <Typography  variant="body1">
            <SchoolIcon/> {getLocaleText(
              {"en": "MSc Computer Science in ", 
              "zh-tra": "計算機科學理學碩士，畢業於", 
              "zh-sim": "计算机科学理学硕士，毕业于", 
              "tto-bro": "Yae3CFRH3Yde AF7X8Q7A Sd2X8Q7A T8eLAG8d2, bemZeih Oei ", 
              // "tto": "Fab RhSe"
            }, 
              lang
            )} 
            <a href="https://www.ed.ac.uk/">
            {getLocaleText(
              {"en": " the University of Edinburgh ", 
              "zh-tra": "愛丁堡大學", 
              "zh-sim": "爱丁堡大学", 
              "tto-bro": "Oae3D8aH D8RQ3X8Q7A", 
              // "tto": "Fab RhSe"
            }, 
              lang
            )}
            </a> 
        </Typography>
        <Typography  variant="body1">
          <SchoolIcon/> {getLocaleText(
              {"en": "BEng Vehicle Engineering in ", 
              "zh-tra": "車輛工程工學學士，畢業於", 
              "zh-sim": "车辆工程工学学士，毕业于", 
              "tto-bro": "BeRSeRZ3 YFZD8leLZ YFZX8Q7A X8Q7AG8d2, bemZeih Oei ", 
              // "tto": "Fab RhSe"
            }, 
              lang
            )} 
          <a href={getLocaleText(
              {"en": "https://en.tongji.edu.cn/", 
              "zh-tra": "https://www.tongji.edu.cn/", 
              "zh-sim": "https://www.tongji.edu.cn/",
              "de": "https://de.tongji.edu.cn/"
            }, 
              lang
            )}>
          {getLocaleText(
              {"en": "Tongji University", 
              "zh-tra": "同濟大學", 
              "zh-sim": "同济大学", 
              "tto-bro": "D8FZ9ae3 D8RQ3X8Q7A", 
              // "tto": "Fab RhSe"
            }, 
              lang
            )}
          </a>
        </Typography>


        <Typography  variant="h2">
        {getLocaleText(
              {"en": "Web Apps", "zh-tra": "Web 應用", "zh-sim": "Web 应用", "tto-bro": "Fab OeZ3Ee7Z3", "tto": "Fab RhSe"}, 
              lang
            )}
        </Typography>

        <Grid>
              <IconButton href={domain + "love"}>
                <FavoriteIcon/>
              </IconButton>
              <IconButton href={domain + "cantonese-flashcard"}>
                粵
              </IconButton>
              <IconButton href={domain + "khmer-starter"}>
                ក	
              </IconButton>
              <IconButton href={domain + "hanpoly"}>
                漢
              </IconButton>
              <IconButton href={domain + "word-lookuper"}>
                <TravelExploreIcon/>
              </IconButton>
              <IconButton href={domain + "qieyun-autoderiver"}>
                韻
              </IconButton>
            </Grid>

        <PostCard 
          image={picFolder + 'love.png'}
          alt="Ethan Yang"
          title={getLocaleText(
            {"en": "Blogs of my love with Yuran He", 
            "zh-tra": "與然小姐姐的戀愛記錄", 
            "zh-sim": "与然小姐姐的恋爱记录", 
            "tto-bro": "Eei2 X87 Zei2HMeaH DaA SvaH3Oie3 Yd3Se7A", 
            // "tto": "Fab RhSe"
          }, 
            lang
          )}
          main="Recording what we have experienced together."
          toLink={domain + "love"}
        />

        <PostCard 
          image={picFolder + 'cantonese-flashcard.png'}
          alt="Cantonese Flashcard Screenshot"
          title={getLocaleText(
            {"en": "Cantonese Flashcard", 
            "zh-tra": "粵語字卡", 
            "zh-sim": "粤语字卡",
            "tto": "vmv ARD"
          }, 
            lang
          )}
          main="Display flashcards with Chinese characters and Jyutping with your comfortable speed."
          toLink={domain + "cantonese-flashcard"}
        />

        <PostCard 
          image={picFolder + 'khmer-starter.png'}
          alt="Ethan Yang"
          title={getLocaleText(
            {"en": "Khmer Starter", 
            "zh-tra": "高棉語啟輝器", 
            "zh-sim": "高棉语启辉器", 
            "tto-bro": "YRFVeaHZei2 Aae2XFeAQe3", 
            "tto": "AVRa Aae"
          }, 
            lang
          )}
          main="Split Khmer sentences into words and then look up its romanization, pronunciation and meaning (later) in Wiktionary."
          toLink={domain + "khmer-starter"}
        />

        <PostCard 
          image={picFolder + 'hanpoly.png'}
          alt="Ethan Yang"
          title={getLocaleText(
            {"en": "HanPoly", 
            "zh-tra": "漢諸", 
            "zh-sim": "汉诸", 
            "tto-bro": "XRH3Tei", 
            "tto": "XRHhoSe"
          }, 
            lang
          )}
          main="Find the pronunciation of a Chinese character in multiple languages and dialects."
          toLink={domain + "hanpoly"}
        />

        <PostCard 
          image={picFolder + 'word-lookuper.png'}
          alt="Screenshot of Word Lookup"
          title={getLocaleText(
            {"en": "Word Lookup", 
            "zh-tra": "查詞", 
            "zh-sim": "查词"
          }, 
            lang
          )}
          main="Look up the word in Wiktionary with some additional functionalities."
          toLink={domain + "word-lookuper"}
        />

        <PostCard 
          image={picFolder + 'qieyun-autoderiver.png'}
          alt="Ethan Yang"
          title={getLocaleText(
            {"en": "Qieyun Autoderiver with Ttomni Rimduk", 
            "zh-tra": "切韻音系自動推導器（含丌通語音讀）", 
            "zh-sim": "切韵音系自动推导器（含丌通语音读）", 
            "tto-bro": "camFH3 OQeVX8ae3 98e3D8FZ2 moeD8RF3AQe3 (X8iV Y8dmFZZei2 OQeVD8FA)", 
            // "tto": "Fab RhSe"
          }, 
            lang
          )}
          main="Forked from https://github.com/nk2028/qieyun-autoderiver, with my own
                Ttomni Rimduk (OQeVD8FA), which is used by my own Ttomni language."
          toLink={domain + "qieyun-autoderiver"} 
        />
        

      </Stack>
      ):(
        <MuiMarkdown overrides={{
          h6: { props: { style: { scrollMarginTop: "50px" }, }, },
          h5: { props: { style: { scrollMarginTop: "50px" }, }, },
          h4: { props: { style: { scrollMarginTop: "50px" }, }, },
          h3: {
            props: {
              style: { fontSize: 38 },
            },
          },
          h2: {
            props: {
              style: { fontSize: 46 },
            },
          },
          h1: {
            props: {
              style: { fontSize: 56, scrollMarginTop: "50px" },
            },
          }
        }}>{markdown}</MuiMarkdown>
      )}
      <br/>
      <br/>
      </Container>
    </div>
  );
}

export default function AppWithColorToggler() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}