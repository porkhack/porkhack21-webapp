import oadaCacheOvermind from "@oada/oada-cache-overmind";
const oada = oadaCacheOvermind("oada");

// Define type of State
export type State = {
  oada: any;
  connection: null | string;
  loaded: boolean;
  mapCenter: { lat: number; lon: number; zoom: number };
  field: Array<any>;
  progressPolygon: Array<any>;
  fields: Array<string>;
  fieldsDetail: Array<any>;
  selectedField: null | number;
  progress: { acre: number; percentage: number };
  statistics: {
    numOfFieldsHarvested: number;
    numOfFieldsBeingHarvested: number;
    totalHarvestedAreaInAcre: number;
    totalAreaInAcre: number;
    progress: number;
  };
  mostRecentFieldChange: number | null;
  moveDone: boolean;
};

// Initialize State
export const state: State = {
  oada: oada.state,
  connection: null,
  loaded: false,
  selectedField: null,
  mapCenter: { lat: 40.77884287, lon: -102.084164, zoom: 14 },
  moveDone: true,
  get mostRecentFieldChange() {
    if (this.connection && this.loaded) {
      const fields = this.fields;
      const idx = fields.indexOf(
        this.oada[this.connection].bookmarks.agrinovus.mostRecentFieldChange
      );
      if (idx >= 0) {
        return idx;
      } else {
        return null;
      }
    } else {
      return null;
    }
  },
  get fieldsDetail() {
    if (this.connection && this.loaded) {
      // Connected
      const findex = this.oada[this.connection].bookmarks.agrinovus[
        "field-index"
      ];
      var data: Array<object> = [];
      for (let key in findex) {
        const percentage: number = findex[key]?.progress?.progress || 0;
        data.push({ name: key, percentage });
      }
      return data;
    } else {
      return [];
    }
  },
  get fields() {
    if (this.connection && this.loaded) {
      // Connected
      return Object.keys(
        this.oada[this.connection].bookmarks.agrinovus["field-index"]
      );
    } else {
      return [];
    }
  },
  get field() {
    if (this.connection && this.loaded && this.selectedField !== null) {
      const selectedFieldName = this.fields[this.selectedField];
      return (
        this.oada[this.connection].bookmarks.agrinovus["field-index"][
          selectedFieldName
        ]?.field?.polygon || []
      );
    } else {
      return [];
    }
  },
  get progressPolygon() {
    if (this.connection && this.loaded && this.selectedField !== null) {
      const selectedFieldName = this.fields[this.selectedField];
      return (
        this.oada[this.connection].bookmarks.agrinovus["field-index"][
          selectedFieldName
        ]?.progress?.polygon || []
      );
    } else {
      return [];
    }
  },
  get progress() {
    if (this.connection && this.loaded && this.selectedField !== null) {
      const selectedFieldName = this.fields[this.selectedField];
      return {
        acre: this.oada[this.connection].bookmarks.agrinovus["field-index"][
          selectedFieldName
        ]?.progress?.areaInAcre,
        percentage:
          this.oada[this.connection].bookmarks.agrinovus["field-index"][
            selectedFieldName
          ]?.progress?.progress * 100,
      };
    } else {
      return { acre: 0, percentage: 0 };
    }
  },
  get statistics() {
    if (
      this.connection &&
      this.loaded &&
      this.oada[this.connection].bookmarks.agrinovus.statistics
    ) {
      return this.oada[this.connection].bookmarks.agrinovus.statistics;
    } else {
      return {
        numOfFieldsHarvested: 0,
        numOfFieldsBeingHarvested: 0,
        totalHarvestedAreaInAcre: 0,
        totalAreaInAcre: 0,
        progress: 0,
      };
    }
  },
};
