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
La web està estructurada en diverses seccions per facilitar la navegació i l'accés a la informació:

- Inici: Resum de les condicions meteorològiques actuals i previsions per als propers dies.
- Mapes: Cartografia interactiva que mostra les condicions de neu en diferents localitzacions.
- Consells de seguretat: Recomanacions per a la pràctica segura del snowboard.
- Contacte: Formulari de contacte per als usuaris que necessitin més informació o vulguin fer consultes.
S’han utilitzat elements visuals com taules i diagrames per representar les dades de manera clara i comprensible.

# Web responsive
Per assegurar que la web s’adapti a diferents dispositius, s’han utilitzat tècniques de disseny web responsiu, com ara les media queries i un sistema de reixeta (grid system). Les imatges s’han optimitzat en termes de resolució i mida per garantir una càrrega ràpida i una visualització adequada en diferents pantalles, des de mòbils fins a ordinadors de sobretaula.

# Cartografia
Els mapes que apareixen a la web han estat integrats utilitzant tecnologies com Leaflet i OpenStreetMap. Aquests mapes permeten una interacció dinàmica, permetent als usuaris explorar diferents zones i veure les condicions de neu en temps real. S’han elaborat amb dades geogràfiques precises per oferir una experiència rica i informativa.

# Dificultats/millores
Durant el desenvolupament de la web, s’han trobat diverses dificultats, com ara la integració de dades en temps real i l'optimització del rendiment de la pàgina. S'han pres mesures per superar aquestes dificultats, com ara l'ús de tècniques de caché i l'optimització del codi. En termes de millores futures, es contempla ampliar la cobertura de dades i incorporar noves funcionalitats, com ara alertes personalitzades per als usuaris.

# Pregunta
Les preguntes dels usuaris s’han respost utilitzant un vocabulari tècnic específic i adequat al context de la geografia i la meteorologia. Això inclou termes com "isotermes", "pressió atmosfèrica", "precipitació nivosa", i "modelització climàtica", assegurant que la informació proporcionada sigui precisa i comprensible per als usuaris.
