# WEB APP CLIMATE SERVICE

# NEUSERVEI - SNOW
Com a objectiu principal, NEUSERVEI aspira a integrar el snowboard, un esport molt intens i de pràctica hivernal, amb les diverses condicions climàtiques que es poden trobar els seus practicants, com ara la neu fresca, la neu pols, la neu humida, el gel, la neu compactada, etc. La web esta composta per: 

# Tema/Motivació

Com a principal objectiu, tindriem que NEUSERVEI intenta connectar el snowboard, un esport que em fascina profundament, amb les condicions climàtiques essencials per a la seva pràctica segura i plaent. És una motivació personal intensa per a mi, ja que el snowboard no només és una passió, sinó una part integral de la meva vida. Crec fermament que proporcionar informació meteorològica específica i actualitzada pot millorar significativament la nostra experiència a les pistes. Aquest servei està dissenyat no només per ajudar als esportistes a planificar les seves jornades amb confiança, sinó també per potenciar la seguretat en un entorn que, tot i ser emocionant, requereix una comprensió precisa del clima. Amb NEUSERVEI, aspirem a crear un recurs que no només enriqueixi la pràctica del snowboard, sinó que també fomenti una connexió més profunda amb la natura i les condicions climàtiques que ens envolten.

# Dades/continguts

Les dades utilitzades a la web provenen de diverses fonts fiables com ara serveis meteorològics nacionals, dades de satèl·lit, i estacions meteorològiques locals. Les principals fonts de dades inclouen:

- **Centro de Descargas del CNIG (IGN)**: Proporciona accés a diverses dades geogràfiques d'Espanya, incloent mapes topogràfics i ortofotos, essencials per a la cartografia interactiva de la web.
  
- **Copernicus Climate Data Store**: Ofereix una àmplia gamma de dades climàtiques de tota Europa, incloent-hi observacions meteorològiques històriques i previsions. Aquesta plataforma és crucial per obtenir informació actualitzada sobre les condicions climàtiques que afecten la pràctica del snowboard.
  
- **Meteocat**: Servei meteorològic de Catalunya que proporciona dades meteorològiques en temps real i històriques, amb especial èmfasi en la predicció de nevades i altres fenòmens climàtics que afecten les muntanyes catalanes.
  
- **Ecad**: Proporciona dades climàtiques europees històriques, que són útils per a l'anàlisi a llarg termini de les condicions de neu i altres variables climàtiques. 

A nivell cartogràfic s´ha utilitzat QGIS, on dins d’aquest s’han treballat:

- **Capes de Límits Municipals del Centre Nacional d'Informació Geogràfica (CNIG)**: Aquesta capa proporciona informació precisa sobre els límits administratius dels municipis.
  
- **Fons de Mapa**: **He utilitzat Google Satèlit**: Per als fons de mapa, he optat per les imatges de satèl·lit de Google. Aquestes proporcionen una visió detallada i actualitzada del terreny, la qual cosa és molt útil per a visualitzar elements geogràfics com carreteres, vegetació, edificis i altres infraestructures.

- **Per introduir la cartografia a la web he utilitzat**: **QGIS2Web**: QGIS2Web és un plugin de QGIS que permet exportar projectes de QGIS directament a formats web interactius, com Leaflet o OpenLayers.


Per buscar les característiques de les pistes properes a Espot i Pont de Suert, s'ha cercat informació a llocs com:

- **Webs oficials de les estacions d'esquí**: Les pàgines web de les estacions d'esquí com Espot Esquí i Boí Taüll (prop de Pont de Suert) proporcionen informació detallada sobre les pistes, incloent-hi la longitud, la dificultat, els serveis disponibles, i les condicions meteorològiques actuals. 

- **Plataformes de ressenyes d'usuaris**: Llocs web com TripAdvisor, Google Reviews i Ski Resort Info ofereixen ressenyes i valoracions de persones que han visitat les estacions d'esquí, ja que les opinions dels usuaris poden destacar aspectes que no es troben en les descripcions oficials, com ara l'atenció al client i la congestió a les pistes.

- **Fòrums i comunitats en línia**: Fòrums especialitzats en esports d'hivern, com SnowForecast i Ski Forum, ja que proporcionen una plataforma per a discussions detallades sobre les condicions de les pistes, les millors rutes, i consells per als visitants. 

- **Aplicacions mòbils d'esquí**: Aplicacions com Ski Tracks i Slopes ofereixen informació en temps real sobre les pistes, incloent-hi mapes detallats, condicions de neu, i prediccions meteorològiques.

- **Guies turístiques i mapes**.


# Estructura de la Web

**1. Inici**:
- Logotip de NEUSERVEI: Incloure el logotip distintiu de NEUSERVEI per a la identificació visual immediata (incorporat a totes les pestanyes).
- Benvinguda i presentació: Text inicial que introdueix NEUSERVEI com a servei innovador dedicat a millorar l'experiència dels practicants de Snow a Espot i Pont de Suert.
- Introducció al projecte NEUSERVEI.
- Descripció de l'objectiu del projecte: millorar l'experiència dels amants dels esports d'hivern proporcionant informació climàtica específica.
- Vídeo introductori: Incorporar el vídeo de YouTube de l'estació d'Espot per proporcionar als visitants una visió immersiva de l'entorn i les condicions de l'estació.

**2. Membres**:
Nombrament de l'equip, amb les seves respectives fotos.

- ***Alex Moreno***: Geògraf especialitzat en climatologia i lideratge de recerca. Analitza els patrons climàtics per millorar la seguretat dels esquiadors.
- ***Laura Sánchez***: Meteoròloga supervisora de dades i desenvolupadora de models predictius per a estacions d'esquí. Proporciona previsions detallades per a una planificació segura de l'esquí.
- ***Marc Vidal***: Enginyer de sistemes que gestiona la infraestructura tecnològica per recopilar i distribuir informació climàtica.
- ***Anna López***: Especialista en turisme de neu que millora les recomanacions i serveis per a una millor experiència dels esquiadors.
- ***Jordi Puig***: Comunicador i facilitador de la comunicació amb el públic, millorant la comprensió de les condicions climàtiques per a l'esquí.

**3. Projecte**:

- ***3.1 Introducció***: Descripció detallada del servei climàtic i la seva importància per als esquiadors.
- ***3.2 Elaboració d’índex***: Explicació de com s'elaboren els índexs de viabilitat climàtica.
- ***3.3 Resultats***: Presentació gràfica i analítica dels resultats de l'índex per a Espot i Pont de Suert.
- ***3.4 Diagrama de Gantt***: Seguiment visual de les tasques realitzades durant el desenvolupament del projecte.
- ***3.5 Conclusions***: Resum de les conclusions obtingudes del projecte i recomanacions per a futurs desenvolupaments.


**4. Mapa (Pistes Snow)**:
- Ubicació geogràfica: Representació visual de les localitzacions clau del projecte (Espot i Pont de Suert).


**5. Contacte**:
- Informació de contacte: Detalls per a la comunicació directa amb el servei NEUSERVEI.

# Disseny Responsive a NEUSERVEI: Optimitzant l'Experiència en Tots els Dispositius

A NEUSERVEI, ens preocupem profundament per proporcionar una experiència web intuitiva i efectiva per a tots els nostres usuaris, independentment del dispositiu que utilitzin. Per aconseguir-ho, hem implementat un disseny totalment responsive que s'adapta de manera dinàmica a qualsevol grandària de pantalla, des de grans monitors fins a tauletes i telèfons mòbils.

Com ho hem aconseguit:

**1. Adaptabilitat mitjançant Media Queries**:

- Utilitzem ***media queries*** per ajustar el contingut en funció de la grandària de la pantalla. Per exemple, quan la pantalla és més petita (mòbils i tauletes), augmentem la mida del text dels títols a 24px per millorar la llegibilitat i ajustem l'amplada dels contenidors (.container i .containerTab) al 95% per evitar que el contingut desbordi la pantalla.
- Augmentem la mida del text del contenidor del lema (#contenidorSlogan) a 5vw per adaptar-lo a l'ample de la pantalla del dispositiu mòbil.
- Disposem els elements del menú de navegació en una columna (nav ul) i ajustem la seva amplada (nav li) al 100% per garantir una navegació fluida en pantalles més petites.
- Ajustem la mida del text dins de les taules (.containerTab td, .containerTab th) a 18px per millorar la visualització en dispositius mòbils.
- En dispositius més grans, com els ordinadors de sobretaula, optimitzem l'espai visual redueixent la grandària del text del lema i assegurant que els elements s'organitzin de manera coherent sense trencar el disseny.

**2. Implementació de Bootstrap**:

- Hem integrat el ***framework Bootstrap*** per simplificar la gestió del disseny responsive. Bootstrap ens permet estructurar els components de manera flexible i garantir una consistència visual en tota la nostra pàgina web.
- Això inclou l'ús de classes que s'ajusten automàticament segons la mida del dispositiu, facilitant la disposició dels elements com les taules i els menús de navegació en formats que s'adaptin perfectament a cada pantalla.

# Cartografia
Per realitzar la cartografia per a NEUSERVEI, he seguit els següents passos detallats:

**1. Cerca de Dades**:

- Vaig buscar i vaig importar la capa de municipis per incloure els municipis de Pont de Suert i Espot.
- Vaig utilitzar l'aplicació de Google Satèl·lit per a obtenir imatges detallades de les àrees pertinents.

**2. Digitalització de Rutes**:

- He digitalitzat totes les rutes que condueixen fins a les pistes d'esquí, tant per al municipi de Pont de Suert com per al de Espot. Això inclou la creació de camins digitals que reflecteixen amb precisió les rutes físiques.

**3. Implementació de la Calculadora de Camps**:

- He integrat la calculadora de camps a les diferents capes del mapa. Això em permet proporcionar dades clau com la superfície de les àrees, la distància entre punts rellevants i altres codis o indicadors necessaris per a l'anàlisi i la visualització detallada.

**4. Aplicació del Complement QGIS2Web**:

- Vaig instal·lar i activar el complement QGIS2Web, una eina essencial per a convertir els mapes creats a QGIS en formats web interactius.
- Vaig configurar les capes del mapa dins de QGIS2Web per assegurar una visualització precisa i atractiva en el format web.

**5.Exportació del Mapa Final**:

- Finalment, vaig exportar el mapa complet en format zip. Aquesta exportació em permet adjuntar fàcilment el mapa final a la pàgina web de NEUSERVEI, garantint que els usuaris puguin explorar les rutes i les àrees d'interès amb facilitat i detall.

Amb aquests passos, he assegurat que la cartografia per a NEUSERVEI no només sigui precisa i detallada, sinó també accessible i fàcil d'explorar pels usuaris interessats en les condicions i les rutes de les pistes d'esquí a Pont de Suert i Espot.

# Dificultats/millores
Durant el desenvolupament de la web, s’han trobat diverses dificultats, com ara la integració de dades en temps real i l'optimització del rendiment de la pàgina. S'han pres mesures per superar aquestes dificultats, com ara l'ús de tècniques de caché i l'optimització del codi. En termes de millores futures, es contempla ampliar la cobertura de dades i incorporar noves funcionalitats, com ara alertes personalitzades per als usuaris.

# Pregunta
Les preguntes dels usuaris s’han respost utilitzant un vocabulari tècnic específic i adequat al context de la geografia i la meteorologia. Això inclou termes com "isotermes", "pressió atmosfèrica", "precipitació nivosa", i "modelització climàtica", assegurant que la informació proporcionada sigui precisa i comprensible per als usuaris.
