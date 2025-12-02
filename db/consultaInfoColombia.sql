SELECT
    p.iso3,
    p.nombre                    AS pais,
    p.region,
    p.poblacion,
    p.pppgdp,
    p.ppppc,

    i.num                       AS indicador_codigo,
    i.nombre                    AS indicador_nombre,
    i.nivel,
    i.tipo,
    i.perfil,
    i.descripcion               AS indicador_descripcion,
    i.fuente,
    i.web,

    m.id                        AS medicion_id,
    m.datayr,
    m.value_screen,
    m.score,
    m.rank,

    e.id                        AS emprendimiento_id,
    e.nombre                    AS emprendimiento_nombre,
    e.descripcion               AS emprendimiento_descripcion,
    e.sector,
    e.anio_fundacion,
    e.sitio_web,
    e.contacto,
    e.creado_en,
    u.id                        AS usuario_id,
    u.nombre                    AS usuario_nombre,
    u.email                     AS usuario_email

FROM paises p
LEFT JOIN mediciones m
    ON p.iso3 = m.iso3
LEFT JOIN indicadores i
    ON m.num = i.num
LEFT JOIN emprendimientos e
    ON p.iso3 = e.iso3
LEFT JOIN usuarios u
    ON e.creado_por = u.id
WHERE p.iso3 = 'COL';  -- cambia por el país que quieras
