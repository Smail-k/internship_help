#!/usr/bin/perl

use strict;
use warnings;
use JSON;

# Données pour le contenu JSON
my %data = (
    nom     => "John Doe",
    age     => 30,
    ville   => "Paris"
);

# Encodage des données en JSON
my $json = encode_json \%data;

# Impression du contenu JSON
print $json;
