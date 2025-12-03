SELECT
    p.iso3                              AS iso,
    p.nombre                            AS nombre_economia,
    i.num                               AS indicador_num,
    i.nombre                            AS indicador_nombre,
    m.datayr,
    m.value_screen,
    m.score,
    m.rank
FROM public.mediciones m
JOIN public.paises p      ON m.iso3 = p.iso3
JOIN public.indicadores i ON m.num  = i.num
--WHERE p.iso3 = 'COL';