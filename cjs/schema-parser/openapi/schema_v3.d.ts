export declare const schemaV3: {
    type: string;
    definitions: {
        Reference: {
            type: string;
            required: string[];
            patternProperties: {
                '^\\$ref$': {
                    type: string;
                    format: string;
                };
            };
        };
        Discriminator: {
            type: string;
            required: string[];
            properties: {
                propertyName: {
                    type: string;
                };
                mapping: {
                    type: string;
                    additionalProperties: {
                        type: string;
                    };
                };
            };
        };
        ExternalDocumentation: {
            type: string;
            required: string[];
            properties: {
                description: {
                    type: string;
                };
                url: {
                    type: string;
                    format: string;
                };
            };
            patternProperties: {
                '^x-': {};
            };
            additionalProperties: boolean;
        };
        XML: {
            type: string;
            properties: {
                name: {
                    type: string;
                };
                namespace: {
                    type: string;
                    format: string;
                };
                prefix: {
                    type: string;
                };
                attribute: {
                    type: string;
                    default: boolean;
                };
                wrapped: {
                    type: string;
                    default: boolean;
                };
            };
            patternProperties: {
                '^x-': {};
            };
            additionalProperties: boolean;
        };
    };
    properties: {
        title: {
            type: string;
        };
        multipleOf: {
            type: string;
            exclusiveMinimum: number;
        };
        maximum: {
            type: string;
        };
        exclusiveMaximum: {
            type: string;
            default: boolean;
        };
        minimum: {
            type: string;
        };
        exclusiveMinimum: {
            type: string;
            default: boolean;
        };
        maxLength: {
            type: string;
            minimum: number;
        };
        minLength: {
            type: string;
            minimum: number;
            default: number;
        };
        pattern: {
            type: string;
            format: string;
        };
        maxItems: {
            type: string;
            minimum: number;
        };
        minItems: {
            type: string;
            minimum: number;
            default: number;
        };
        uniqueItems: {
            type: string;
            default: boolean;
        };
        maxProperties: {
            type: string;
            minimum: number;
        };
        minProperties: {
            type: string;
            minimum: number;
            default: number;
        };
        required: {
            type: string;
            items: {
                type: string;
            };
            minItems: number;
            uniqueItems: boolean;
        };
        enum: {
            type: string;
            items: {};
            minItems: number;
            uniqueItems: boolean;
        };
        type: {
            type: string;
            enum: string[];
        };
        not: {
            oneOf: {
                $ref: string;
            }[];
        };
        allOf: {
            type: string;
            items: {
                oneOf: {
                    $ref: string;
                }[];
            };
        };
        oneOf: {
            type: string;
            items: {
                oneOf: {
                    $ref: string;
                }[];
            };
        };
        anyOf: {
            type: string;
            items: {
                oneOf: {
                    $ref: string;
                }[];
            };
        };
        items: {
            oneOf: {
                $ref: string;
            }[];
        };
        properties: {
            type: string;
            additionalProperties: {
                oneOf: {
                    $ref: string;
                }[];
            };
        };
        additionalProperties: {
            oneOf: ({
                $ref: string;
                type?: undefined;
            } | {
                type: string;
                $ref?: undefined;
            })[];
            default: boolean;
        };
        description: {
            type: string;
        };
        format: {
            type: string;
        };
        default: {};
        nullable: {
            type: string;
            default: boolean;
        };
        discriminator: {
            $ref: string;
        };
        readOnly: {
            type: string;
            default: boolean;
        };
        writeOnly: {
            type: string;
            default: boolean;
        };
        example: {};
        externalDocs: {
            $ref: string;
        };
        deprecated: {
            type: string;
            default: boolean;
        };
        xml: {
            $ref: string;
        };
    };
    patternProperties: {
        '^x-': {};
    };
    additionalProperties: boolean;
};