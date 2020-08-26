import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RecommendedProduct = ({ data }) => {
    return (
        <Layout>
            <SEO title="Recommended Product" />
            <div>
                Sumber: <a href="https://www.youtube.com/watch?v=NN7_TDxAGoc" >Brewok Tv</a>
            </div>
            <div
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                }}
            >
                <div style={{
                    width: `33.33%`,
                    padding: `1rem`,
                }}>
                    <a href="https://shopee.prf.hn/l/rdDooNr" >
                        <div style={{
                            width: `100%`,
                            paddingBottom: `100%`,
                            backgroundSize: `contain`,
                            backgroundImage: `url("https://cf.shopee.co.id/file/6d329fb58a97c7b53312f1f2402b13ce")`,
                        }}>
                        </div>
                        <div>KIRKLAND MINOXIDIL 5% EXTRA STRENGTH 60ML PENUMBUH RAMBUT PRIA</div>
                    </a>
                </div>
                <div style={{
                    width: `33.33%`,
                    padding: `1rem`,
                }}>
                    <a href="https://shopee.prf.hn/l/649nypK" >
                        <div style={{
                            width: `100%`,
                            paddingBottom: `100%`,
                            backgroundSize: `contain`,
                            backgroundImage: `url("https://cf.shopee.co.id/file/983ec4e7ee41c1ad300318ef0b883e73")`,
                        }}>
                        </div>
                        <div>Puritan Pride Biotin 7500mcg 100 Tablet Termurah</div>
                    </a>
                </div>
                <div style={{
                    width: `33.33%`,
                    padding: `1rem`,
                }}>
                    <a href="https://shopee.prf.hn/l/rvRq9Rr" >
                        <div style={{
                            width: `100%`,
                            paddingBottom: `100%`,
                            backgroundSize: `contain`,
                            backgroundImage: `url("https://cf.shopee.co.id/file/e0ea92bc57c006a732b5dc0cb743d12f")`,
                        }}>
                        </div>
                        <div>Kirkland Minoxidil Foam 5% Hair Loss Regrowth</div>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default RecommendedProduct
