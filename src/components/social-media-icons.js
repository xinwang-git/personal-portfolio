import { HStack, Center, Stack, Button, Box, Flex, IconButton, useMediaQuery, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { MdAlternateEmail, MdOutlinePictureAsPdf } from 'react-icons/md'
import NextLink from 'next/link'

export default function SocialMediaIcons() {
    const [desktopQuery] = useMediaQuery("(min-width: 700px)");
    const [isMinWidth, setIsMinWidth] = useState(false);
    
    useEffect(() => {
    if(desktopQuery !== isMinWidth){
      setIsMinWidth(desktopQuery);
    }
    }, [isMinWidth, desktopQuery])
    
    return (
      <Flex>
      <Flex direction="row" display={["none", "none", "flex", "flex"]}>
      <Stack direction={"row"} spacing={8} mt={4} p={0}>
        <NextLink href="mailto: xinwng3@gmail.com" passHref>
        <Button as="a" target="_blank" size="md" rightIcon={<MdAlternateEmail />} borderRadius="xl" borderWidth="2.5px" colorScheme='pink' variant='outline' fontWeight="normal" fontSize=".95rem">
          e-mail
        </Button>
        </NextLink>
        
        <NextLink href="https://www.linkedin.com/in/xinwng" passHref>
          <Button as="a" target="_blank" size="md" rightIcon={<FaLinkedin /> } borderRadius="xl" borderWidth="2.5px" colorScheme='linkedin' variant='outline' fontWeight="normal" fontSize=".95rem">
            linkedin
          </Button>
        </NextLink>

        <NextLink href="https://www.github.com/xinwng" passHref>
          <Button as="a" target="_blank" size="md" rightIcon={<FaGithubSquare />} borderRadius="xl" borderWidth="2.5px" colorScheme='green' variant='outline' fontWeight="normal" fontSize=".95rem">
            github
          </Button>
        </NextLink>
        
        <NextLink href="/Xin_Wang_Resume.pdf" passHref>
        <Button as="a" target="_blank" size="md" rightIcon={<MdOutlinePictureAsPdf />} borderRadius="xl" borderWidth="2.5px" colorScheme='facebook' variant='outline'fontWeight="normal" fontSize=".95rem">
          resume
        </Button>
        </NextLink>
      
      </Stack>
      </Flex>
      <Flex my={5} mb={0} display={["flex", "flex", "none", "none"]}>
        <SimpleGrid columns={2} spacing="30px">
        <NextLink href="mailto: xinwng3@gmail.com" passHref>
        <Button as="a" target="_blank" size="lg" rightIcon={<MdAlternateEmail />} borderRadius="xl" borderWidth="2.5px" colorScheme='pink' variant='outline' fontWeight="normal" fontSize=".95rem">
          e-mail
        </Button>
        </NextLink>
        
        <NextLink href="https://www.linkedin.com/in/xinwng" passHref>
          <Button as="a" target="_blank" size="lg" rightIcon={<FaLinkedin /> } borderRadius="xl" borderWidth="2.5px" colorScheme='linkedin' variant='outline' fontWeight="normal" fontSize=".95rem">
            linkedin
          </Button>
        </NextLink>

        <NextLink href="https://www.github.com/xinwng" passHref>
          <Button as="a" target="_blank" size="lg" rightIcon={<FaGithubSquare />} borderRadius="xl" borderWidth="2.5px" colorScheme='green' variant='outline' fontWeight="normal" fontSize=".95rem">
            github
          </Button>
        </NextLink>
        
        <NextLink href="/Xin_Wang_Resume.pdf" passHref>
        <Button as="a" target="_blank" size="lg" rightIcon={<MdOutlinePictureAsPdf />} borderRadius="xl" borderWidth="2.5px" colorScheme='facebook' variant='outline' fontWeight="normal" fontSize=".95rem">
          resume
        </Button>
        </NextLink>

        </SimpleGrid>
      </Flex>
      </Flex>
    )
}
