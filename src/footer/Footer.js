import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainers, FooterLinksWrapper, FooterLinksItems, FooterLinksTitle, FooterLink } from './FooterElements';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainers>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle> Pupten. </FooterLinksTitle>
                                <FooterLink to="/">facebook linkedin</FooterLink>
                                <FooterLink to="/">founders@pupten.com</FooterLink>
                                <FooterLink to="/">+919693775328</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle> PRODUCTS </FooterLinksTitle>
                                <FooterLink to="/">Veteniary Dashboard</FooterLink>
                                <FooterLink to="/">Caregiver Portal</FooterLink>
                                <FooterLink to="/">Find and Book a Vet</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle> PLATFORM </FooterLinksTitle>
                                <FooterLink to="/">Sign Us</FooterLink>
                                <FooterLink to="/">Book a Demo</FooterLink>
                                <FooterLink to="/">Blog</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle> INFORMATION </FooterLinksTitle>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">FAQ</FooterLink>
                                <FooterLink to="/">Privacy Policy</FooterLink>
                                <FooterLink to="/">Terms & Conditions</FooterLink>
                                <FooterLink to="/">Refund Policy</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainers>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
