// Arreglo maestro con las 35 páginas extraídas y ordenadas
const pagesData = [
    {
        title: "Portada e Introducción General",
        tag: "Introducción",
        content: `
            <h2 class="text-2xl font-bold text-white mb-4">Procesamiento y Análisis de Datos en Minería de Datos</h2>
            <p class="text-slate-300 mb-4">Bienvenido a la aplicación de enseñanza interactiva orientada a la carrera de <strong>Ingeniería en Informática de INACAP Punta Arenas</strong>[cite: 2, 4]. En este recurso revisarás técnicas avanzadas de analítica, estándares de calidad (ISO, TDQM, DAMA), inferencia estadística y dashboards interactivos[cite: 2].</p>
            <div class="bg-slate-700/50 p-4 rounded-lg border-l-4 border-red-500">
                <p class="text-sm text-slate-200"><strong>Objetivo:</strong> Desarrollar un flujo analítico reproducible desde la formulación de preguntas de negocio hasta la comunicación efectiva de hallazgos[cite: 4].</p>
            </div>
        `
    },
    {
        title: "Arsenal Analítico: Visión General",
        tag: "Técnicas Analíticas",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Técnicas que Transforman Datos</h2>
            <p class="text-slate-300 mb-4">La elección de una técnica depende de la pregunta de negocio[cite: 4, 5]. Contamos con cuatro pilares analíticos fundamentales[cite: 5]:</p>
            <ul class="list-disc list-inside space-y-2 text-slate-300 mb-4">
                <li><strong>Regresión:</strong> Relaciona y cuantifica variables[cite: 5, 7].</li>
                <li><strong>Análisis Estadístico:</strong> Describe, compara y contrasta grupos o poblaciones[cite: 5, 8].</li>
                <li><strong>Series Temporales:</strong> Modela patrones con memoria cronológica[cite: 5, 9].</li>
                <li><strong>Análisis de Redes:</strong> Comprende relaciones y estructura de vínculos[cite: 5, 10].</li>
            </ul>
        `
    },
    {
        title: "Analítica Orientada al Valor del Negocio",
        tag: "Técnicas Analíticas",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Estrategia y Preguntas Clave</h2>
            <p class="text-slate-300 mb-4">El valor de la analítica surge únicamente cuando el resultado modifica o guía una decisión organizacional[cite: 6].</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-slate-900 p-3 rounded border border-slate-700"><strong>Descriptiva:</strong> ¿Qué está ocurriendo?[cite: 6]</div>
                <div class="bg-slate-900 p-3 rounded border border-slate-700"><strong>Explicativa:</strong> ¿Por qué ocurre?[cite: 6]</div>
                <div class="bg-slate-900 p-3 rounded border border-slate-700"><strong>Predictiva:</strong> ¿Qué evento es probable que ocurra?[cite: 6]</div>
                <div class="bg-slate-900 p-3 rounded border border-slate-700"><strong>Relacional:</strong> ¿Cómo se conectan las entidades?[cite: 6]</div>
            </div>
        `
    },
    {
        title: "Regresión: Conceptos Generales",
        tag: "Regresión",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Cuantificación de Relaciones</h2>
            <p class="text-slate-300 mb-4">Permite modelar la relación entre una variable objetivo (dependiente) y una o más variables explicativas[cite: 7].</p>
            <div class="bg-slate-900 p-4 rounded text-center text-red-400 font-mono mb-4 text-lg">
                y = β₀ + β₁x + ε
            </div>
            <p class="text-slate-300 text-sm">Donde <strong>β₀</strong> es el intercepto, <strong>β₁</strong> la pendiente y <strong>ε</strong> la variación no explicada (error)[cite: 7].</p>
        `
    },
    {
        title: "Tipos de Regresión",
        tag: "Regresión",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Modelos Lineales, Logísticos y Poisson</h2>
            <p class="text-slate-300 mb-3">La naturaleza de la respuesta condiciona el tipo de regresión a utilizar[cite: 7]:</p>
            <ul class="list-disc list-inside space-y-2 text-slate-300">
                <li><strong>Regresión Lineal Simple/Múltiple:</strong> Para respuestas continuas (ej. estimación de ventas o consumo)[cite: 7].</li>
                <li><strong>Regresión Logística:</strong> Modela la probabilidad de un evento binario (ej. fuga de clientes: Sí/No)[cite: 7].</li>
                <li><strong>Regresión de Poisson:</strong> Diseñada para conteos e incidencias[cite: 7].</li>
            </ul>
        `
    },
    {
        title: "Supuestos de la Regresión Lineal",
        tag: "Regresión",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Validación de Supuestos Críticos</h2>
            <p class="text-slate-300 mb-4">Para realizar inferencias válidas mediante modelos lineales clásicos se deben verificar los siguientes supuestos[cite: 7]:</p>
            <div class="space-y-2">
                <div class="p-2 bg-slate-700 rounded text-sm">1. <strong>Linealidad:</strong> Relación lineal entre variables[cite: 7].</div>
                <div class="p-2 bg-slate-700 rounded text-sm">2. <strong>Independencia de Errores:</strong> Ausencia de autocorrelación residual[cite: 7].</div>
                <div class="p-2 bg-slate-700 rounded text-sm">3. <strong>Homocedasticidad:</strong> Varianza constante en los residuos[cite: 7].</div>
                <div class="p-2 bg-slate-700 rounded text-sm">4. <strong>Normalidad de Residuos:</strong> Comportamiento Gaussiano de los errores[cite: 7].</div>
            </div>
        `
    },
    {
        title: "Análisis Estadístico: Describir y Comparar",
        tag: "Estadística",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Estadística Descriptiva e Inferencial</h2>
            <p class="text-slate-300 mb-4">La estadística descriptiva sintetiza la información existente mediante medias, medianas y gráficos[cite: 8]. La inferencial utiliza una muestra para contrastar afirmaciones poblacionales[cite: 8].</p>
            <div class="bg-slate-900 p-4 rounded text-slate-300 text-sm">
                <strong>Ejemplo de Aplicación:</strong> Comparar el tiempo promedio de respuesta entre dos sucursales o verificar si una pieza producida cumple especificaciones[cite: 8].
            </div>
        `
    },
    {
        title: "Series Temporales: Datos con Memoria",
        tag: "Series Temporales",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Estructura Cronológica</h2>
            <p class="text-slate-300 mb-4">Una serie temporal es una secuencia ordenada de observaciones a lo largo del tiempo donde la posición temporal aporta información analítica clave[cite: 9].</p>
            <div class="w-full bg-slate-900 p-4 rounded flex justify-center mb-4">
                <svg width="300" height="100" viewBox="0 0 300 100" class="stroke-red-500 fill-none stroke-2">
                    <path d="M 10 80 Q 50 10, 90 70 T 170 30 T 250 80 T 290 20" />
                    <circle cx="10" cy="80" r="3" class="fill-red-400"/>
                    <circle cx="90" cy="70" r="3" class="fill-red-400"/>
                    <circle cx="170" cy="30" r="3" class="fill-red-400"/>
                    <circle cx="290" cy="20" r="3" class="fill-red-400"/>
                </svg>
            </div>
            <p class="text-xs text-slate-400 text-center">Componentes: Tendencia, Estacionalidad, Ciclos y Ruido[cite: 9].</p>
        `
    },
    {
        title: "Autocorrelación y Modelado Temporal",
        tag: "Series Temporales",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Modelos ARIMA y Suavizamiento</h2>
            <p class="text-slate-300 mb-4">Dado que las observaciones cercanas están correlacionadas (autocorrelación), no se pueden asumir datos independientes[cite: 9].</p>
            <ul class="list-disc list-inside space-y-2 text-slate-300 text-sm">
                <li><strong>Promedio Móvil & Suavizamiento Exponencial:</strong> Entregan bases interpretables iniciales[cite: 9].</li>
                <li><strong>Modelos ARIMA:</strong> Representan explícitamente la autocorrelación[cite: 9].</li>
                <li><strong>Validación Cronológica:</strong> Nunca se debe entrenar con datos del futuro para predecir el pasado[cite: 9].</li>
            </ul>
        `
    },
    {
        title: "Análisis de Redes: Nodos y Aristas",
        tag: "Análisis de Redes",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Modelado de Relaciones Causal-Estructurales</h2>
            <p class="text-slate-300 mb-4">Representa entidades como <strong>Nodos</strong> y las relaciones entre ellas como <strong>Aristas</strong>[cite: 10].</p>
            <div class="w-full bg-slate-900 p-4 rounded flex justify-center mb-2">
                <svg width="200" height="120" viewBox="0 0 200 120" class="stroke-slate-400 fill-slate-700">
                    <line x1="40" y1="30" x2="100" y2="60" stroke-width="2"/>
                    <line x1="160" y1="30" x2="100" y2="60" stroke-width="2"/>
                    <line x1="100" y1="60" x2="100" y2="100" stroke-width="2"/>
                    <circle cx="40" cy="30" r="12" class="fill-red-600"/>
                    <circle cx="160" cy="30" r="12" class="fill-red-600"/>
                    <circle cx="100" cy="60" r="15" class="fill-emerald-600"/>
                    <circle cx="100" cy="100" r="12" class="fill-red-600"/>
                </svg>
            </div>
            <p class="text-xs text-slate-400 text-center">Útil para redes logísticas, sociales, prevención de fraude o fallas en cadena[cite: 10].</p>
        `
    },
    {
        title: "Métricas de Centralidad en Redes",
        tag: "Análisis de Redes",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Grado, Intermediación y Cercanía</h2>
            <p class="text-slate-300 mb-3">Las métricas definen el rol específico de un nodo dentro del sistema[cite: 10]:</p>
            <div class="space-y-2 text-slate-300 text-sm">
                <div class="bg-slate-900 p-2 rounded"><strong>Centralidad de Grado:</strong> Identifica nodos con el mayor número de conexiones directas[cite: 10].</div>
                <div class="bg-slate-900 p-2 rounded"><strong>Intermediación (Betweenness):</strong> Señala nodos que conectan diferentes sectores (posibles cuellos de botella)[cite: 10].</div>
                <div class="bg-slate-900 p-2 rounded"><strong>Cercanía (Closeness):</strong> Evalúa qué tan rápido se alcanza a otros nodos[cite: 10].</div>
            </div>
        `
    },
    {
        title: "Selección de la Técnica Adecuada",
        tag: "Metodología",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Cuadro Comparativo de Selección</h2>
            <p class="text-slate-300 mb-4">Proceso para mapear necesidades de negocio con soluciones analíticas:</p>
            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs text-slate-300 border border-slate-700">
                    <thead class="bg-slate-900 text-slate-100">
                        <tr><th class="p-2">Pregunta</th><th class="p-2">Técnica Recomendada</th></tr>
                    </thead>
                    <tbody>
                        <tr class="border-t border-slate-700"><td class="p-2">¿Cuánto venderemos el próximo mes?</td><td class="p-2">Series Temporales / Regresión</td></tr>
                        <tr class="border-t border-slate-700"><td class="p-2">¿Qué clientes se parecen entre sí?</td><td class="p-2">Clustering (No Supervisado)</td></tr>
                        <tr class="border-t border-slate-700"><td class="p-2">¿Cómo fluye el tráfico o fraude?[cite: 10]</td><td class="p-2">Análisis de Redes[cite: 10]</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        title: "Calidad Certificada de Datos",
        tag: "Calidad de Datos",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Normas ISO y Marcos Formales</h2>
            <p class="text-slate-300 mb-4">Un modelo analítico robusto falla si utiliza datos de baja calidad[cite: 5]. Se revisan 4 marcos de calidad principales:</p>
            <div class="grid grid-cols-2 gap-3 text-sm">
                <div class="bg-slate-900 p-3 rounded border-l-2 border-red-500"><strong>ISO 8000:</strong> Calidad de datos maestros e intercambio.</div>
                <div class="bg-slate-900 p-3 rounded border-l-2 border-blue-500"><strong>ISO/IEC 25012:</strong> Modelo de características de calidad.</div>
                <div class="bg-slate-900 p-3 rounded border-l-2 border-emerald-500"><strong>TDQM:</strong> Gestión de datos como producto.</div>
                <div class="bg-slate-900 p-3 rounded border-l-2 border-purple-500"><strong>DAMA-DMBOK:</strong> Gobierno de datos.</div>
            </div>
        `
    },
    {
        title: "Calidad como Adecuación al Uso",
        tag: "Calidad de Datos",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Reglas, Métricas y Umbrales</h2>
            <p class="text-slate-300 mb-4">Un dato es de calidad si sirve para el propósito específico previsto. Operacionalizar la calidad requiere 4 elementos:</p>
            <ul class="space-y-2 text-slate-300 text-sm">
                <li><strong>Regla:</strong> Condición lógica (ej. <i>fecha_fin >= fecha_inicio</i>).</li>
                <li><strong>Métrica:</strong> Expresión cuantitativa de cumplimiento (%).</li>
                <li><strong>Umbral:</strong> Nivel mínimo aceptable (ej. Completitud >= 98%).</li>
                <li><strong>Control:</strong> Procedimiento automatizado preventivo o correctivo.</li>
            </ul>
        `
    },
    {
        title: "Familia ISO 8000: Datos Maestros",
        tag: "Calidad de Datos",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Estandarización y Registro Dorado</h2>
            <p class="text-slate-300 mb-4">ISO 8000 aborda la calidad de datos con énfasis en vocabularios compartidos y gestión de datos maestros (clientes, repuestos, activos).</p>
            <p class="text-slate-300 text-sm mb-2">Las 5 dimensiones fundamentales según ISO 8000 son:</p>
            <ol class="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                <li>Exactitud</li>
                <li>Completitud</li>
                <li>Consistencia</li>
                <li>Validez</li>
                <li>Trazabilidad</li>
            </ol>
        `
    },
    {
        title: "ISO/IEC 25012: Características Inherentes",
        tag: "Calidad de Datos",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Modelo de Calidad de Datos Inherente</h2>
            <p class="text-slate-300 mb-3">Aplica a los datos por sí mismos en condiciones ideales:</p>
            <div class="space-y-2 text-slate-300 text-sm">
                <div class="bg-slate-900 p-2 rounded"><strong>Exactitud:</strong> Grado en que los datos reflejan la realidad (sintáctica y semántica).</div>
                <div class="bg-slate-900 p-2 rounded"><strong>Completitud:</strong> Presencia de todos los atributos necesarios.</div>
                <div class="bg-slate-900 p-2 rounded"><strong>Consistencia:</strong> Ausencia de contradicciones entre sistemas.</div>
                <div class="bg-slate-900 p-2 rounded"><strong>Actualidad:</strong> Vigencia temporal de los datos.</div>
            </div>
        `
    },
    {
        title: "ISO/IEC 25012: Dependientes del Sistema",
        tag: "Calidad de Datos",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Calidad Dependiente del Sistema</h2>
            <p class="text-slate-300 mb-3">Propiedades asociadas al entorno informático tecnológico donde residen los datos:</p>
            <ul class="list-disc list-inside space-y-2 text-slate-300 text-sm">
                <li><strong>Accesibilidad:</strong> Facilidad de obtención por usuarios autorizados.</li>
                <li><strong>Confidencialidad:</strong> Protección contra accesos no autorizados.</li>
                <li><strong>Eficiencia & Portabilidad:</strong> Rendimiento del procesamiento e interoperabilidad entre plataformas.</li>
                <li><strong>Trazabilidad:</strong> Posibilidad de auditar el origen y transformaciones.</li>
            </ul>
        `
    },
    {
        title: "TDQM: Información como Producto",
        tag: "Calidad de Datos",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Ciclo TDQM (Total Data Quality Management)</h2>
            <p class="text-slate-300 mb-4">Adapta la calidad industrial tratando a la información como un producto continuo.</p>
            <div class="grid grid-cols-2 gap-2 text-center text-xs font-bold mb-4">
                <div class="bg-red-900/60 p-3 rounded">1. DEFINIR <br><span class="font-normal text-slate-300">Requisitos consumidor</span></div>
                <div class="bg-blue-900/60 p-3 rounded">2. MEDIR <br><span class="font-normal text-slate-300">Métricas cuantitativas</span></div>
                <div class="bg-emerald-900/60 p-3 rounded">3. MEJORAR <br><span class="font-normal text-slate-300">Rediseñar procesos</span></div>
                <div class="bg-purple-900/60 p-3 rounded">4. ANALIZAR <br><span class="font-normal text-slate-300">Causa raíz (5 Porqués)</span></div>
            </div>
        `
    },
    {
        title: "DAMA-DMBOK: Áreas de Conocimiento",
        tag: "Gobierno de Datos",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">El Marco DAMA-DMBOK</h2>
            <p class="text-slate-300 mb-3">Integra la calidad dentro de 11 áreas de conocimiento del Gobierno de Datos:</p>
            <p class="text-slate-300 text-sm mb-2">Áreas clave: Gobernanza, Arquitectura, Modelado, Seguridad, Integración, Metadatos, Datos Maestros y Calidad.</p>
            <div class="bg-slate-900 p-3 rounded text-slate-300 text-sm border border-slate-700">
                <strong>Roles Clave:</strong> Data Owner (Toma decisiones), Data Steward (Define reglas y negocio), Custodio Técnico (Sistemas e infraestructura).
            </div>
        `
    },
    {
        title: "Normas en Acción: Analítica en R",
        tag: "Práctica en R",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Implementación de Estándares en R</h2>
            <p class="text-slate-300 mb-4">Antes de ejecutar cualquier modelo estadístico, se debe automatizar un flujo de validación y profilado inicial.</p>
            <pre class="bg-slate-950 p-3 rounded text-emerald-400 font-mono text-xs overflow-x-auto">
# Perfilado inicial
datos <- read.csv("ventas.csv")
summary(datos)
colSums(is.na(datos))
sum(duplicated(datos))
            </pre>
            <p class="text-xs text-slate-400 mt-2">Permite auditar duplicados y valores nulos previo a la toma de decisiones.</p>
        `
    },
    {
        title: "Reglas de Calidad en R",
        tag: "Práctica en R",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Automatización de Métricas en R</h2>
            <p class="text-slate-300 mb-3">Transformación de dimensiones conceptuales en scripts verificables:</p>
            <pre class="bg-slate-950 p-3 rounded text-emerald-400 font-mono text-xs overflow-x-auto">
# Métricas de calidad
completitud  <- mean(!is.na(datos$precio)) * 100
validez      <- mean(datos$precio >= 0, na.rm = TRUE) * 100
consistencia <- mean(datos$total == datos$cantidad * datos$precio) * 100
            </pre>
        `
    },
    {
        title: "Registro de Incidencias y Bitácora",
        tag: "Práctica en R",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Trazabilidad de Decisiones</h2>
            <p class="text-slate-300 mb-4">Toda limpieza requiere registro formal para asegurar auditoría y reproducibilidad.</p>
            <div class="bg-slate-900 p-4 rounded text-sm text-slate-300 space-y-2">
                <p><strong>Incidencia:</strong> Precios negativos en 1.8% de registros.</p>
                <p><strong>Dimensión Afectada:</strong> Validez y Exactitud.</p>
                <p><strong>Acción Tomada:</strong> Exclusión justificada y corrección del script fuente.</p>
            </div>
        `
    },
    {
        title: "Comparación Antes y Después",
        tag: "Práctica en R",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Impacto de la Calidad en el Modelo</h2>
            <p class="text-slate-300 mb-3">Evaluar cómo la depuración altera las conclusiones del negocio:</p>
            <pre class="bg-slate-950 p-3 rounded text-emerald-400 font-mono text-xs overflow-x-auto">
# Comparación de modelos en R
modelo_crudo  <- lm(ventas ~ precio + promo, data = datos_crudos)
modelo_limpio <- lm(ventas ~ precio + promo, data = datos_limpios)

summary(modelo_crudo)
summary(modelo_limpio)
            </pre>
            <p class="text-xs text-slate-400 mt-2">Los datos defectuosos pueden distorsionar los coeficientes significativamente.</p>
        `
    },
    {
        title: "Inferencia Estadística en R",
        tag: "Inferencia",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Conceptos de Inferencia Poblacional</h2>
            <p class="text-slate-300 mb-4">Permite extrapolar conclusiones desde una muestra hacia toda la población[cite: 8].</p>
            <ul class="space-y-2 text-slate-300 text-sm">
                <li><strong>Población vs Muestra:</strong> El todo frente al subconjunto observado.</li>
                <li><strong>Parámetro vs Estadístico:</strong> Valor verdadero desconocido vs estimación muestral.</li>
                <li><strong>Sesgo de Selección:</strong> Un mayor tamaño muestral no corrige muestras no representativas.</li>
            </ul>
        `
    },
    {
        title: "Intervalos de Confianza y Error Estándar",
        tag: "Inferencia",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Estimación y Teorema Central del Límite</h2>
            <p class="text-slate-300 mb-4">El Intervalo de Confianza (IC) acompaña la estimación puntual con un rango de incertidumbre.</p>
            <pre class="bg-slate-950 p-3 rounded text-emerald-400 font-mono text-xs mb-3">
# Intervalo de confianza al 95% en R
t.test(datos$satisfaccion, conf.level = 0.95)
            </pre>
            <p class="text-slate-300 text-xs">A mayor tamaño muestral (<i>n</i>), menor es el error estándar y más estrecho el intervalo.</p>
        `
    },
    {
        title: "Pruebas de Hipótesis y p-valor",
        tag: "Inferencia",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Pruebas de Hipótesis</h2>
            <p class="text-slate-300 mb-4">Se contrasta la Hipótesis Nula (H₀) frente a la Alternativa (H₁).</p>
            <div class="grid grid-cols-2 gap-3 text-sm mb-4">
                <div class="bg-slate-900 p-3 rounded"><strong>p-valor:</strong> Mide la compatibilidad de los datos observados con H₀.</div>
                <div class="bg-slate-900 p-3 rounded"><strong>Nivel α (0.05):</strong> Umbral para controlar el Error Tipo I.</div>
            </div>
            <p class="text-xs text-slate-400">Atención: p > 0.05 no prueba igualdad; solo indica falta de evidencia suficiente.</p>
        `
    },
    {
        title: "Prueba t de Student en R",
        tag: "Inferencia",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Comparación de Medias</h2>
            <p class="text-slate-300 mb-3">Permite verificar si las medias de dos grupos difieren significativamente[cite: 8]:</p>
            <pre class="bg-slate-950 p-3 rounded text-emerald-400 font-mono text-xs overflow-x-auto">
# Grupos independientes
t.test(satisfaccion ~ sucursal, data = datos)

# Muestras pareadas (Antes vs Después)
t.test(datos$antes, datos$despues, paired = TRUE)
            </pre>
        `
    },
    {
        title: "Chi-Cuadrado y ANOVA",
        tag: "Inferencia",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Pruebas Multigrupo y Categóricas</h2>
            <p class="text-slate-300 mb-3">Evaluación para múltiples grupos o datos categóricos[cite: 8]:</p>
            <ul class="space-y-2 text-slate-300 text-sm">
                <li><strong>Chi-Cuadrado:</strong> Evalúa la independencia entre variables categóricas[cite: 8].
                    <code class="block bg-slate-950 p-1 text-emerald-400 text-xs rounded mt-1">chisq.test(tabla)</code>
                </li>
                <li><strong>ANOVA:</strong> Compara medias entre 3 o más grupos[cite: 8].
                    <code class="block bg-slate-950 p-1 text-emerald-400 text-xs rounded mt-1">aov(tiempo ~ sucursal, data = datos)</code>
                </li>
            </ul>
        `
    },
    {
        title: "Lectura de Outputs de Regresión",
        tag: "Interpretación",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Interpretación con Criterio Profesional</h2>
            <p class="text-slate-300 mb-4">Un valor significativo debe evaluarse junto con R² y la magnitud real del negocio[cite: 7].</p>
            <div class="bg-slate-900 p-3 rounded border border-slate-700 text-sm text-slate-300">
                <p class="mb-2"><strong>Coeficiente (β):</strong> Representa el cambio esperado en la variable respuesta por cada unidad de cambio en la variable independiente[cite: 7].</p>
                <p><strong>R² Ajustado:</strong> Mide la proporción de variabilidad explicada penalizando predictores redundantes.</p>
            </div>
        `
    },
    {
        title: "Diagnóstico de Residuos",
        tag: "Interpretación",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Evaluación Gráfica de Errores</h2>
            <p class="text-slate-300 mb-3">Detección visual de violaciones a los supuestos del modelo:</p>
            <pre class="bg-slate-950 p-3 rounded text-emerald-400 font-mono text-xs mb-3">
# Gráficos de diagnóstico en R
par(mfrow = c(2,2))
plot(modelo)
            </pre>
            <p class="text-slate-300 text-xs">Busca heterocedasticidad (forma de embudo), no linealidad o puntos influyentes (Distancia de Cook).</p>
        `
    },
    {
        title: "Construcción de Dashboards: Propósito",
        tag: "Dashboards",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Paneles orientados a Decisiones</h2>
            <p class="text-slate-300 mb-4">Un dashboard es una interfaz interactiva diseñada para la toma de decisiones rápidas e informadas.</p>
            <div class="grid grid-cols-3 gap-2 text-center text-xs">
                <div class="bg-slate-900 p-3 rounded border border-slate-700"><strong>Operativo:</strong> Detalle y alta frecuencia.</div>
                <div class="bg-slate-900 p-3 rounded border border-slate-700"><strong>Táctico:</strong> Monitoreo de KPIs de gestión.</div>
                <div class="bg-slate-900 p-3 rounded border border-slate-700"><strong>Estratégico:</strong> Síntesis directiva.</div>
            </div>
        `
    },
    {
        title: "Selección Visual y Jerarquía",
        tag: "Dashboards",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Principios Visuales y Narrativa</h2>
            <p class="text-slate-300 mb-3">Estructura recomendada en pantallas directivas:</p>
            <ol class="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                <li><strong>Capa Superior:</strong> Tarjetas con KPIs principales.</li>
                <li><strong>Capa Central:</strong> Gráficos de tendencias y comparaciones.</li>
                <li><strong>Capa Inferior:</strong> Detalle en tablas explícitas.</li>
            </ol>
        `
    },
    {
        title: "Flexdashboard y Shiny en R",
        tag: "Dashboards",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Tecnologías de Despliegue en R</h2>
            <p class="text-slate-300 mb-3">Creación de soluciones interactivas en el ecosistema R:</p>
            <ul class="space-y-2 text-slate-300 text-sm mb-4">
                <li><strong>Flexdashboard:</strong> Dashboards en HTML estático generados rápidamente mediante RMarkdown.</li>
                <li><strong>Shiny:</strong> Aplicaciones dinámicas con servidor reactivo en tiempo real.</li>
            </ul>
        `
    },
    {
        title: "Gobernanza y Ética en Dashboards",
        tag: "Gobierno",
        content: `
            <h2 class="text-xl font-bold text-white mb-3">Ética y Mantenimiento de Paneles</h2>
            <p class="text-slate-300 mb-4">Garantizar trazabilidad, fechas de actualización y privacidad de los datos.</p>
            <div class="bg-slate-700/50 p-3 rounded text-slate-200 text-sm">
                Evita la sobre-filtración que permita re-identificar individuos en conjuntos pequeñamente agrupados.
            </div>
        `
    },
    {
        title: "Evaluación Interactiva: Drag & Drop",
        tag: "Evaluación",
        content: `
            <h2 class="text-xl font-bold text-white mb-2">Actividad de Asociación de Conceptos</h2>
            <p class="text-slate-300 text-sm mb-4">Arrastra los conceptos de la izquierda hacia su correspondiente definición en la derecha:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Origen (Items) -->
                <div id="drag-items" class="space-y-2 bg-slate-900 p-3 rounded-lg border border-slate-700">
                    <h3 class="text-xs font-bold uppercase text-slate-400 mb-2">Conceptos Clave</h3>
                    <div draggable="true" id="concept-1" class="drag-item bg-red-600/80 p-2 rounded text-xs font-bold text-white shadow">ISO 8000</div>
                    <div draggable="true" id="concept-2" class="drag-item bg-blue-600/80 p-2 rounded text-xs font-bold text-white shadow">p-valor</div>
                    <div draggable="true" id="concept-3" class="drag-item bg-emerald-600/80 p-2 rounded text-xs font-bold text-white shadow">Homocedasticidad</div>
                    <div draggable="true" id="concept-4" class="drag-item bg-purple-600/80 p-2 rounded text-xs font-bold text-white shadow">Intermediación</div>
                    <div draggable="true" id="concept-5" class="drag-item bg-amber-600/80 p-2 rounded text-xs font-bold text-white shadow">TDQM</div>
                </div>

                <!-- Destinos (Targets) -->
                <div class="space-y-2">
                    <div data-match="concept-3" class="drop-zone bg-slate-900 p-2 rounded border border-dashed border-slate-600 text-xs min-h-[48px]">
                        <span class="text-slate-400 block text-[10px]">Varianza constante en los residuos de regresión:</span>
                    </div>
                    <div data-match="concept-1" class="drop-zone bg-slate-900 p-2 rounded border border-dashed border-slate-600 text-xs min-h-[48px]">
                        <span class="text-slate-400 block text-[10px]">Estándar internacional de calidad para datos maestros:</span>
                    </div>
                    <div data-match="concept-4" class="drop-zone bg-slate-900 p-2 rounded border border-dashed border-slate-600 text-xs min-h-[48px]">
                        <span class="text-slate-400 block text-[10px]">Métrica de redes para nodos puente entre comunidades:</span>
                    </div>
                    <div data-match="concept-2" class="drop-zone bg-slate-900 p-2 rounded border border-dashed border-slate-600 text-xs min-h-[48px]">
                        <span class="text-slate-400 block text-[10px]">Medida de compatibilidad con la hipótesis nula:</span>
                    </div>
                    <div data-match="concept-5" class="drop-zone bg-slate-900 p-2 rounded border border-dashed border-slate-600 text-xs min-h-[48px]">
                        <span class="text-slate-400 block text-[10px]">Marco de gestión de la información como un producto:</span>
                    </div>
                </div>
            </div>
            <div id="game-feedback" class="mt-4 text-center text-sm font-bold h-6"></div>
        `
    }
];

// Estado de la Aplicación
let currentPage = 0;

// Render de la página activa
function renderPage() {
    const page = pagesData[currentPage];
    document.getElementById("page-tag").innerText = page.tag;
    document.getElementById("page-indicator").innerText = `Página ${currentPage + 1} de ${pagesData.length}`;
    document.getElementById("page-content").innerHTML = page.content;

    // Actualizar barra de progreso
    const progressPercent = ((currentPage + 1) / pagesData.length) * 100;
    document.getElementById("progress-bar").style.width = `${progressPercent}%`;

    // Estado de botones
    document.getElementById("btn-prev").disabled = currentPage === 0;
    document.getElementById("btn-next").disabled = currentPage === pagesData.length - 1;

    // Si es la página final (Drag & Drop), activar listeners
    if (currentPage === pagesData.length - 1) {
        initDragAndDrop();
    }
}

function nextPage() {
    if (currentPage < pagesData.length - 1) {
        currentPage++;
        renderPage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
}

// Generador e Impresor en PDF del recurso completo
function exportToPDF() {
    const element = document.createElement("div");
    element.className = "p-8 bg-white text-black";
    
    let fullHTML = `<h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; text-align: center;">Minería de Datos - INACAP Punta Arenas</h1>`;
    pagesData.forEach((p, idx) => {
        fullHTML += `
            <div style="page-break-after: always; margin-bottom: 30px; font-family: sans-serif;">
                <span style="font-size: 10px; color: #666; text-transform: uppercase;">Página ${idx + 1} | ${p.tag}</span>
                <h2 style="font-size: 18px; font-weight: bold; margin-top: 5px; color: #111;">${p.title}</h2>
                <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ccc;"/>
                <div style="font-size: 12px; color: #333;">${p.content}</div>
            </div>
        `;
    });
    element.innerHTML = fullHTML;

    const opt = {
        margin:       10,
        filename:     'Mineria_de_Datos_INACAP_Punta_Arenas.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// Lógica para Drag and Drop
function initDragAndDrop() {
    const items = document.querySelectorAll('.drag-item');
    const zones = document.querySelectorAll('.drop-zone');
    let correctCount = 0;

    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
        });
    });

    zones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const itemId = e.dataTransfer.getData('text/plain');
            const expectedMatch = zone.getAttribute('data-match');

            if (itemId === expectedMatch) {
                const draggedElem = document.getElementById(itemId);
                zone.appendChild(draggedElem);
                zone.classList.add('border-emerald-500', 'bg-emerald-950/30');
                draggedElem.setAttribute('draggable', 'false');
                correctCount++;
                
                if (correctCount === 5) {
                    const feedback = document.getElementById('game-feedback');
                    feedback.className = "mt-4 text-center text-sm font-bold text-emerald-400";
                    feedback.innerText = "¡Excelente! Has completado correctamente todas las relaciones conceptuales.";
                }
            } else {
                const feedback = document.getElementById('game-feedback');
                feedback.className = "mt-4 text-center text-sm font-bold text-red-400";
                feedback.innerText = "Respuesta incorrecta. Intenta nuevamente.";
                setTimeout(() => { feedback.innerText = ""; }, 2000);
            }
        });
    });
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderPage();
});