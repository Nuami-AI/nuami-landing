import Script from "next/script";

const SNIPPET = `(function(w, d, a){
    w.__beusablerumclient__ = {
        load : function(src){
            var b = d.createElement("script");
            b.src = src; b.async=true; b.type = "text/javascript";
            d.getElementsByTagName("head")[0].appendChild(b);
        }
    };w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
})(window, document, "//rum.beusable.net/load/b260927e125309u083");`;

export default function Beusable() {
  return (
    <Script id="beusable-rum" strategy="afterInteractive">
      {SNIPPET}
    </Script>
  );
}
