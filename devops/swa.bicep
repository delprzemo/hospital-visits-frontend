param staticWebAppName string
param location string = 'westeurope'

resource staticWebApp 'Microsoft.Web/staticSites@2020-12-01' = {
  name: staticWebAppName
  location: location
  sku: {
    name: 'Free'
  }
  properties: {
    buildProperties: {
      appArtifactLocation: 'www'
    }
  }
}
